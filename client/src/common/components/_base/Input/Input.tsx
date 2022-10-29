import cn from 'classnames';
import {
	ComponentProps,
	useState,
	FocusEvent,
	MouseEvent,
	useRef,
	forwardRef,
	useImperativeHandle,
	useId,
} from 'react';
import { Label } from '@radix-ui/react-label';
import { v4 } from 'uuid';
import Logo from '/public/assets/icons/passwordLabel.svg';
import { mergeRefs } from 'react-merge-refs';

interface InputOwnProps {
	align: 'start' | 'center';
}

type InputProps = InputOwnProps &
	Omit<ComponentProps<'input'>, keyof InputOwnProps>;

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ align, placeholder, ...props }, ref) => {
		const [focused, setFocused] = useState(false);
		const [passwordVisible, setPasswordVisible] = useState(false);
		const innerRef = useRef<HTMLInputElement>();
		const id = useId();

		const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
			if (document.activeElement === innerRef.current) setFocused(true);
			if (props.onFocus) props.onFocus(e);
		};

		const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
			setFocused(false);
			if (props.onBlur) props.onBlur(e);
		};

		return (
			<div className="relative">
				<input
					ref={mergeRefs([ref, innerRef])}
					id={id}
					{...props}
					onFocus={handleFocus}
					onBlur={handleBlur}
					className={cn(
						'py-1 px-[2px] border-b-[1px] border-primaryDark h-8',
						'focus:outline-0',
						'transition-all duration-500'
					)}
				/>
				<Label
					htmlFor={props.id || id}
					className={cn(
						'absolute top-[0.25rem] left-0 text-gray',
						'transition-all duration-200',
						focused ? 'opacity-0' : 'opacity-100'
					)}
				>
					{placeholder}
				</Label>
				<span>
					<Logo />
				</span>
			</div>
		);
	}
);

export default Input;
