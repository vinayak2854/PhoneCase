declare module "next/image" {
  import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

  export interface ImageProps
    extends DetailedHTMLProps<
      ImgHTMLAttributes<HTMLImageElement>,
      HTMLImageElement
    > {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: any;
    quality?: number;
    priority?: boolean;
    loading?: "lazy" | "eager";
    placeholder?: "blur" | "empty";
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoadingComplete?: any;
  }

  export default function Image(props: ImageProps): JSX.Element;
}

declare module "react-rnd" {
  import { ComponentType, CSSProperties } from "react";

  export interface RndProps {
    default?: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
    position?: {
      x: number;
      y: number;
    };
    size?: {
      width: number;
      height: number;
    };
    onDragStop?: (e: any, data: { x: number; y: number }) => void;
    onResizeStop?: (
      e: any,
      direction: any,
      ref: HTMLElement,
      delta: any,
      position: { x: number; y: number }
    ) => void;
    className?: string;
    style?: CSSProperties;
    lockAspectRatio?: boolean;
    resizeHandleComponent?: {
      bottomRight?: ComponentType;
      bottomLeft?: ComponentType;
      topRight?: ComponentType;
      topLeft?: ComponentType;
    };
  }

  export const Rnd: ComponentType<RndProps>;
}

declare module "@headlessui/react" {
  import { ComponentType } from "react";

  export interface RadioGroupProps {
    value: any;
    onChange: (value: any) => void;
    children: React.ReactNode;
  }

  export const RadioGroup: ComponentType<RadioGroupProps> & {
    Option: ComponentType<{
      value: any;
      children: React.ReactNode;
      className?:
        | string
        | ((props: { active: boolean; checked: boolean }) => string);
    }>;
    Label: ComponentType<{
      children: React.ReactNode;
      className?: string;
      as?: string;
    }>;
    Description: ComponentType<{
      children: React.ReactNode;
      className?: string;
      as?: string;
    }>;
  };
}

declare module "lucide-react" {
  import { ComponentType, SVGProps } from "react";

  export const ArrowRight: ComponentType<SVGProps<SVGSVGElement>>;
  export const Check: ComponentType<SVGProps<SVGSVGElement>>;
  export const ChevronsUpDown: ComponentType<SVGProps<SVGSVGElement>>;
}

declare module "@tanstack/react-query" {
  import { ComponentType } from "react";

  export interface UseMutationOptions<TData, TError, TVariables> {
    mutationKey?: string[];
    mutationFn: (variables: TVariables) => Promise<TData>;
    onSuccess?: (data: TData, variables: TVariables) => void;
    onError?: (error: TError, variables: TVariables) => void;
  }

  export function useMutation<TData, TError, TVariables>(
    options: UseMutationOptions<TData, TError, TVariables>
  ): {
    mutate: (variables: TVariables) => void;
    isPending: boolean;
  };
}

declare module "next/navigation" {
  export function useRouter(): {
    push: (url: string) => void;
    refresh: () => void;
  };
}
