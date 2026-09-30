import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const inputClass =
  'h-11 w-full rounded-sm border border-input bg-background px-3.5 text-sm text-foreground transition-colors duration-200 placeholder:text-muted-foreground/55 hover:border-ring/60 focus:border-ring focus:ring-2 focus:ring-ring/20 focus:outline-none'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  id: string
  hint?: string
  className?: string
}

export function Field({ label, id, hint, className, ...props }: FieldProps) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label
        htmlFor={id}
        className="text-xs tracking-[0.16em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      <input id={id} className={inputClass} {...props} />
      {hint ? (
        <p className="text-xs leading-relaxed text-muted-foreground/80">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function SectionHeading({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description?: string
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-border pb-5">
      <span className="text-xs tabular-nums tracking-[0.2em] text-muted-foreground">
        {step}
      </span>
      <div>
        <h2 className="font-serif text-2xl leading-none tracking-tight text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}
