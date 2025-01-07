import type { FunctionComponent } from 'react'
import IntrinsicElements = React.JSX.IntrinsicElements

type MdxComponents = { [key in keyof IntrinsicElements]?: FunctionComponent<IntrinsicElements[key]> }

export type { MdxComponents }
