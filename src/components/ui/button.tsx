// AlignUI Button v0.0.0

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { type PolymorphicComponentProps } from '@/lib/polymorphic';
import { recursiveCloneChildren } from '@/lib/recursive-clone-children';
import { tv, type VariantProps } from '@/lib/tv';

const BUTTON_ROOT_NAME = 'ButtonRoot';
const BUTTON_ICON_NAME = 'ButtonIcon';

const fancyButtonVariants = tv({
  slots: {
    root: [
      // base
      'group relative inline-flex items-center justify-center whitespace-nowrap text-label-sm outline-none',
      'transition duration-200 ease-out',
      // focus
      'focus:outline-none',
      // disabled
      'disabled:pointer-events-none disabled:text-text-disabled-300',
      'disabled:bg-bg-weak-50 disabled:bg-none disabled:shadow-none disabled:before:hidden disabled:after:hidden',
    ],
    icon: 'relative z-10 size-5 shrink-0',
  },
  variants: {
    variant: {
      neutral: {
        root: 'bg-bg-strong-950 text-text-white-0 shadow-fancy-buttons-neutral',
      },
      primary: {
        root: 'bg-primary-base text-static-white shadow-fancy-buttons-primary',
      },
      destructive: {
        root: 'bg-error-base text-static-white shadow-fancy-buttons-error',
      },
      basic: {
        root: [
          // base
          'bg-bg-white-0 text-text-sub-600 shadow-fancy-buttons-stroke',
          // hover
          'hover:bg-bg-weak-50 hover:text-text-strong-950 hover:shadow-none',
        ],
      },
    },
    size: {
      medium: {
        root: 'h-10 gap-3 rounded-10 px-3.5',
        icon: '-mx-1',
      },
      small: {
        root: 'h-9 gap-3 rounded-lg px-3',
        icon: '-mx-1',
      },
      xsmall: {
        root: 'h-8 gap-3 rounded-lg px-2.5',
        icon: '-mx-1',
      },
    },
  },
  compoundVariants: [
    {
      variant: ['neutral', 'primary', 'destructive'],
      class: {
        root: [
          // before
          'before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit]',
          'before:bg-gradient-to-b before:p-px',
          'before:from-static-white/[.12] before:to-transparent',
          // before mask
          'before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)]',
          // after
          'after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-static-white after:to-transparent',
          'after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out',
          // hover
          'hover:after:opacity-[.24]',
        ],
      },
    },
  ],
  defaultVariants: {
    variant: 'neutral',
    size: 'medium',
  },
});

type ButtonSharedProps = VariantProps<typeof fancyButtonVariants>;

type ButtonProps = VariantProps<typeof fancyButtonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
  };

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild, children, variant, size, className, ...rest }, forwardedRef) => {
    const uniqueId = React.useId();
    const Component = asChild ? Slot : 'button';
    const { root } = fancyButtonVariants({ variant, size });

    const sharedProps: ButtonSharedProps = {
      variant,
      size,
    };

    const extendedChildren = recursiveCloneChildren(
      children as React.ReactElement[],
      sharedProps,
      [BUTTON_ICON_NAME],
      uniqueId,
      asChild,
    );

    return (
      <Component
        ref={forwardedRef}
        className={root({ class: className })}
        {...rest}
      >
        {extendedChildren}
      </Component>
    );
  },
);
ButtonRoot.displayName = BUTTON_ROOT_NAME;

function ButtonIcon<T extends React.ElementType>({
  className,
  variant,
  size,
  as,
  ...rest
}: PolymorphicComponentProps<T, ButtonSharedProps>) {
  const Component = as || 'div';
  const { icon } = fancyButtonVariants({ variant, size });

  return <Component className={icon({ class: className })} {...rest} />;
}
ButtonIcon.displayName = BUTTON_ICON_NAME;

export { ButtonRoot as Root, ButtonIcon as Icon };
