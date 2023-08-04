
 interface Props {
    errorMessage: string | undefined;
 }


export const Error: React.FC<Props> = ({errorMessage}) => {

    return (
        <div style={{color: 'red'}}>
            {errorMessage}
        </div>
    )
}