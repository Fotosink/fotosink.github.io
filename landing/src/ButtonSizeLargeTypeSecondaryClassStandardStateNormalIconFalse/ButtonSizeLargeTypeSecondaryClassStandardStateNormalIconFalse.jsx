
    import  './ButtonSizeLargeTypeSecondaryClassStandardStateNormalIconFalse.css';


    

    export const ButtonSizeLargeTypeSecondaryClassStandardStateNormalIconFalse = ({ size='small', type='primary', class_='square', state='normal', icon='true', className,  ...props} ) => { 
    const variantsClassName = 'size-' + size+ ' type-' + type+ ' class-' + class_+ ' state-' + state+ ' icon-' + icon;


    return(
<div className={"button-size-large-type-secondary-class-standard-state-normal-icon-false " + className + " " + variantsClassName} >
 <div className="text" >
Button Title </div>
</div>
)}
