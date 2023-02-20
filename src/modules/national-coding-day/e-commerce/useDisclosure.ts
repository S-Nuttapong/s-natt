import { useCallback, useMemo, useState } from "react";

export const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback(() => {
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, [])

    return useMemo(() => ({
        isOpen,
        isClose: !isOpen,
        open,
        close
    }), [isOpen])
}