const Button = ( {children, className, onClick} ) => {
    return (
        <button 
            type="button" 
            className={className}
            onClick={onClick}// chama a funcao Adicionar
        >
            {children}
        </button>
    )
}

export default Button; 