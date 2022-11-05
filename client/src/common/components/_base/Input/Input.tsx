import cn from 'classnames';
import {
	ComponentProps,
	useState,
	useRef,
	forwardRef,
	ChangeEvent,
	KeyboardEvent,
} from 'react';
import { Label } from '@radix-ui/react-label';
import Logo from '/public/assets/icons/passwordLabel.svg';

interface InputOwnProps {
	error?: boolean;
}

type InputProps = InputOwnProps &
	Omit<ComponentProps<'input'>, keyof InputOwnProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, type, ...props }, ref) => {
		const [value, setValue] = useState('');
		const [passwordVisible, setPasswordVisible] = useState(false);

		const isPassword = type === 'password';
		const password = passwordVisible ? '' : 'password';

		const handleClick = () => {
			setPasswordVisible(!passwordVisible);
		};

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value.trim());
			if (props.onChange) props.onChange(e);
		};

		const handleSpacePress = (e: KeyboardEvent) => {
			if (e.key === ' ') setPasswordVisible(!passwordVisible);
		};

		return (
			<div className={cn('relative block h-8', props.className)}>
				<input
					ref={ref}
					{...props}
					value={value}
					onChange={handleChange}
					type={isPassword ? password : type}
					className={cn(
						'border-primaryDark h-full w-full border-b-[1px] py-1 px-[2px] text-sm tracking-wider',
						'focus:outline-[2px] focus:outline-offset-4',
						value && 'placeholder:text-transparent',
						!passwordVisible && value && isPassword && 'font-mono',
						error ? 'outline-red-500' : 'outline-beige',
						(passwordVisible || isPassword) && 'pr-8'
					)}
				/>
				{isPassword && (
					<Label
						htmlFor={props.id}
						tabIndex={1}
						onClick={handleClick}
						onKeyDown={handleSpacePress}
						className={cn(
							'absolute right-2 top-1/2 block -translate-y-[45%] p-1'
						)}
					>
						<Logo />
					</Label>
				)}
			</div>
		);
	}
);

Input.displayName = 'Input';

export default Input;
