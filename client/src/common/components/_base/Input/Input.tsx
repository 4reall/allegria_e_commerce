import cn from 'classnames';
import {
	ComponentProps,
	useState,
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
			<Label
				className={cn(
					'relative block h-8 w-full rounded-sm',
					props.className,
					error
						? 'ring ring-[2px] !ring-red-500 !ring-offset-2'
						: 'ring-beige ring-offset-2 focus-within:ring-[2px]'
				)}
			>
				<input
					ref={ref}
					{...props}
					value={value}
					onChange={handleChange}
					type={isPassword ? password : type}
					className={cn(
						'border-primaryDark h-full w-full border-b-[1px] bg-transparent py-1 px-2',
						'text-sm tracking-wider outline-none',
						value && 'placeholder:text-transparent',
						!passwordVisible && value && isPassword && 'font-mono',
						(passwordVisible || isPassword) && 'pr-6'
					)}
				/>
				{isPassword && (
					<span
						tabIndex={0}
						onClick={handleClick}
						onKeyDown={handleSpacePress}
						className={cn(
							'absolute right-0 top-1/2 z-10 block -translate-y-[50%] p-1 outline-none',
							'focus-visible:ring-beige focus-visible:ring-[2px]'
						)}
					>
						<Logo />
					</span>
				)}
			</Label>
		);
	}
);

Input.displayName = 'Input';

export default Input;
