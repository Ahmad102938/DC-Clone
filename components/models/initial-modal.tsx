"use client"

import {
    Dialog,
    DialogFooter,
    DialogDescription,
    DialogTitle,
    DialogHeader,
    DialogContent
} from "@/components/ui/dialog"

export const IntialModal = () => {
    return (
        <Dialog open>
            <DialogContent className="bg-white text-black, p-0 overflow-hidden">
                <DialogHeader className="text-center text-zinc">
                    custumize your server
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}