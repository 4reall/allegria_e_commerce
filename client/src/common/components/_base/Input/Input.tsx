import cn from 'classnames';
import {
	ComponentProps,
	useState,
	useRef,
	forwardRef,
	ChangeEvent,
} from 'react';
import { Label } from '@radix-ui/react-label';
import Logo from '/public/assets/icons/passwordLabel.svg';
import { mergeRefs } from 'react-merge-refs';
import { v4 } from 'uuid';

interface InputOwnProps {
	align: 'start' | 'center';
	error?: boolean;
}

type InputProps = InputOwnProps &
	Omit<ComponentProps<'input'>, keyof InputOwnProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ align, placeholder, error, ...props }, ref) => {
		const [value, setValue] = useState('');
		const [passwordVisible, setPasswordVisible] = useState(false);
		const innerRef = useRef<HTMLInputElement>();

		const handleClick = () => {
			setPasswordVisible(!passwordVisible);
		};

		const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
			setValue(e.target.value);
			if (props.onChange) props.onChange(e);
		};

		return (
			<Label
				className={cn(
					'relative block h-8 p-[2px] outline-2 focus:outline-red-500'
					// error ? 'outline-red-500' : ''
				)}
			>
				<input
					ref={mergeRefs([ref, innerRef])}
					{...props}
					placeholder={placeholder}
					onChange={handleChange}
					type={passwordVisible ? '' : 'password'}
					className={cn(
						'border-primaryDark h-full w-full border-b-[1px] py-1 px-[2px] text-sm',
						'focus-visible:outline-beige focus:outline-none',
						value && 'placeholder:text-transparent',
						!passwordVisible && value && 'font-mono'
					)}
				/>
				<span
					tabIndex={1}
					onMouseDown={handleClick}
					className={cn(
						'absolute right-2 top-1/2 block -translate-y-[45%] p-2'
					)}
				>
					<Logo />
				</span>
			</Label>
		);
	}
);

export default Input;
