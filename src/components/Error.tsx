import React from 'react'

import { Alert, AlertTitle } from '@material-ui/lab';

type Props = {
    message: string
}

const Error: React.FC<Props> = ({ message }) => {
    return (
        <Alert severity="error">
            <AlertTitle>Ошибка</AlertTitle>
            {message}
        </Alert>
    )
}

export default Error