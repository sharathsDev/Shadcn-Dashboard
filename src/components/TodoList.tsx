'use client'
import { useState } from "react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { ScrollArea } from "./ui/scroll-area"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

const list = [
    { id: "item-1", label: "Complete the project documentation", checked: true },
    { id: "item-2", label: "Write the test cases", checked: true },
    { id: "item-3", label: "Implement the new feature", checked: false },
    { id: "item-4", label: "Review the code changes", checked: false },
    { id: "item-5", label: "Deploy the application to production", checked: false },
    { id: "item-6", label: "Update the project roadmap", checked: true },
    { id: "item-7", label: "Conduct a team meeting" },
    { id: "item-8", label: "Prepare for the client presentation" },
]

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false)
    return (
        <div className="">
            {/* header */}
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <CalendarIcon />
                        <span className="ml-2">
                            {date ? format(date, "PPP") : "Select Date"}
                        </span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={date => {
                            setDate(date)
                            setOpen(false)
                        }}
                    />
                </PopoverContent>
            </Popover>

            {/* list */}
            <ScrollArea className="max-h-[400px] overflow-y-auto mt-4">
                {/* list item */}
                <div className="flex flex-col gap-4">
                    {list.map(({ id, label, checked }) => (
                        <Card key={id} className="p-4 mr-2 ml-2 hover:bg-secondary transition-colors">
                            <div className="flex items-center gap-4">
                                <Checkbox id={id} checked={checked || false} />
                                <label htmlFor={id} className="text-sm text-muted-foreground">
                                    {label}
                                </label>
                            </div>
                        </Card>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}

export default TodoList