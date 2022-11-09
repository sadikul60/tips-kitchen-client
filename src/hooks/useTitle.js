import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} - Tips Kitchen`;
    }, [title])
}

export default useTitle;