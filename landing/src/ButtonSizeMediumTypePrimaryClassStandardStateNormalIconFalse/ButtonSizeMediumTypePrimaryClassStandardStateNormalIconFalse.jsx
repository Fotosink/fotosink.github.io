
    import  './ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse.css';


    

    export const ButtonSizeMediumTypePrimaryClassStandardStateNormalIconFalse = ({ size='small', type='primary', class_='square', state='normal', icon='true', className,  ...props} ) => { 
    const variantsClassName = 'size-' + size+ ' type-' + type+ ' class-' + class_+ ' state-' + state+ ' icon-' + icon;


    return(
<div className={"button-size-medium-type-primary-class-standard-state-normal-icon-false " + className + " " + variantsClassName} >
 <div className="text" >
Button Title </div>
</div>
)}
