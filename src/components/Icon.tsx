import React from 'react';
import classNames from "classnames";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Props = {
    name: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
    const { name, children, className, ...reset } = props
    return (
        <svg className={classNames('icon', className)}>
          {props.name && <use xlinkHref={'#' + props.name} {...reset} />}
        </svg>
    );
};

export default Icon;
