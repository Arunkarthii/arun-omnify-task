"use client"
import React, { useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon, SearchCheck } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// ScheduledDateComponent
const ScheduledDateComponent: React.FC = () => {
    const [date, setDate] = React.useState<Date>()
    const [dateTo, setDateTo] = React.useState<Date>()

    return (
        <>
            <p className='text-xs font-medium mb-2'>Show orders for</p>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="All time" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                    <SelectItem value="last30days">Last 30 days</SelectItem>
                    <SelectItem value="thismonth">This month</SelectItem>
                    <SelectItem value="lastmonth">Last month</SelectItem>
                    <SelectItem value="thisquater">This quater</SelectItem>
                    <SelectItem value="twquaterago">Two quater ago</SelectItem>
                </SelectContent>
            </Select>
            <div className='grid grid-cols-12 gap-2 mt-5'>
                <div className='col-span-12 md:col-span-6'>
                    <p className='font-medium text-xs mb-1'>To</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !dateTo && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={dateTo}
                                onSelect={setDateTo}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='col-span-12 md:col-span-6'>
                    <p className='font-medium text-xs mb-1'>From</p>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !date && "text-muted-foreground"
                                )}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </>
    );
};

// Mock data
const mockData = [
    { id: 1, name: 'John Doe', type: 'payer' },
    { id: 2, name: 'Jane Smith', type: 'attendee' },
    { id: 3, name: 'Alice Johnson', type: 'payer' },
    { id: 4, name: 'Bob Brown', type: 'attendee' },
    { id: 5, name: 'Charlie Davis', type: 'payer' },
    { id: 6, name: 'Daisy Clark', type: 'attendee' },
    { id: 7, name: 'Ella Evans', type: 'payer' },
    { id: 8, name: 'Frank Green', type: 'attendee' },
    { id: 9, name: 'Grace Harris', type: 'payer' },
    { id: 10, name: 'Henry Wilson', type: 'attendee' },
    { id: 11, name: 'Ivy Young', type: 'payer' },
    { id: 12, name: 'Jack Thomas', type: 'attendee' },
    { id: 13, name: 'Katie Martinez', type: 'payer' },
    { id: 14, name: 'Leo Rodriguez', type: 'attendee' },
    { id: 15, name: 'Mia Walker', type: 'payer' },
    { id: 16, name: 'Noah Scott', type: 'attendee' },
    { id: 17, name: 'Olivia King', type: 'payer' },
    { id: 18, name: 'Paul Lewis', type: 'attendee' },
    { id: 19, name: 'Quinn Lee', type: 'payer' },
    { id: 20, name: 'Ruby Turner', type: 'attendee' },
];

const PeopleComponent: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<{ id: number, name: string, type: string }[]>([]);

    const filteredData = mockData.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10);

    const handleCheckboxChange = (item: { id: number, name: string, type: string }) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.find(selectedItem => selectedItem.id === item.id)) {
                return prevSelectedItems.filter(selectedItem => selectedItem.id !== item.id);
            } else {
                return [...prevSelectedItems, item];
            }
        });
    };

    const isItemSelected = (itemId: number) => {
        return selectedItems.some(selectedItem => selectedItem.id === itemId);
    };

    return (
        <div>
            <div className="relative mb-4">
                <input
                    className="h-10 rounded-md w-full shadow ps-9"
                    type="text"
                    placeholder="Search Payer or Attendee name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img className="h-5 absolute top-[10px] left-2" src="/images/search.png" alt="search" />
            </div>
            {searchTerm ? (
                <>
                    <p>Showing {filteredData.length} results matching '{searchTerm ? searchTerm : ' '}'</p>
                    <ul className='mt-3 h-[220px] overflow-auto custom-scrollbar'>
                        {filteredData.map(item => (
                            <li key={item.id} className="flex items-center mb-2">
                                <Checkbox
                                    className="mr-2"
                                    checked={isItemSelected(item.id)}
                                    onCheckedChange={() => handleCheckboxChange(item)}
                                />
                                <span className='text-sm'>{item.name} <span className='text-sm text-slate-400 ms-4 capitalize'>{item.type}</span></span>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <div className="mt-4">
                    <ul>
                        {selectedItems.map(item => (
                            <div key={item.id} className='flex items-center mb-2'>
                                <Checkbox
                                    className="mr-2"
                                    checked={isItemSelected(item.id)}
                                    onCheckedChange={() => handleCheckboxChange(item)}
                                />
                                <li key={item.id} className='text-sm'>{item.name} <span className='text-sm text-slate-400 ms-2 capitalize'>{item.type}</span></li>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PeopleComponent;

const mockData2 = [
    { id: 1, name: 'National Tennis Class', type: 'public', label: 'class' },
    { id: 2, name: 'National Tennis Court', type: 'private', label: 'facility' },
    { id: 3, name: 'Community Swimming Pool', type: 'public', label: 'facility' },
    { id: 4, name: 'Yoga Class', type: 'private', label: 'class' },
    { id: 5, name: 'Public Library', type: 'public', label: 'facility' },
    { id: 6, name: 'Gymnastics Class', type: 'private', label: 'class' },
    { id: 7, name: 'Community Garden', type: 'public', label: 'facility' },
    { id: 8, name: 'Dance Studio', type: 'private', label: 'class' },
    { id: 9, name: 'Soccer Field', type: 'public', label: 'facility' },
    { id: 10, name: 'Basketball Court', type: 'private', label: 'facility' },
    { id: 11, name: 'Karate Class', type: 'public', label: 'class' },
    { id: 12, name: 'Art Workshop', type: 'private', label: 'class' },
    { id: 13, name: 'Science Lab', type: 'public', label: 'facility' },
    { id: 14, name: 'Drama Class', type: 'private', label: 'class' },
    { id: 15, name: 'Public Park', type: 'public', label: 'facility' },
    { id: 16, name: 'Music Class', type: 'private', label: 'class' },
    { id: 17, name: 'Tennis Court', type: 'public', label: 'facility' },
    { id: 18, name: 'Squash Court', type: 'private', label: 'facility' },
    { id: 19, name: 'Pilates Class', type: 'public', label: 'class' },
    { id: 20, name: 'Rowing Club', type: 'private', label: 'facility' },
];

// ServiceComponent
const ServiceComponent: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('names');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedItems, setSelectedItems] = useState<{ id: number, name: string, type: string, label: string }[]>([]);

    const filteredData = mockData2.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10);

    const handleCheckboxChange = (item: { id: number, name: string, type: string, label: string }) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.find(selectedItem => selectedItem.id === item.id)) {
                return prevSelectedItems.filter(selectedItem => selectedItem.id !== item.id);
            } else {
                return [...prevSelectedItems, item];
            }
        });
    };

    const isItemSelected = (itemId: number) => {
        return selectedItems.some(selectedItem => selectedItem.id === itemId);
    };


    const handleValueChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <>
            <RadioGroup value={selectedValue} onValueChange={handleValueChange}>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="names" id="r1" />
                        <Label htmlFor="r1">Search by name</Label>
                    </div>
                    <div className="flex items-center space-x-2 me-5">
                        <RadioGroupItem value="tags" id="r2" />
                        <Label htmlFor="r2">Search by tags</Label>
                    </div>
                </div>
            </RadioGroup>
            {selectedValue === 'names' ? (
                <div className='mt-5'>
                    <div>
                        <div className="relative mb-4">
                            <input
                                className="h-10 rounded-md w-full shadow ps-9"
                                type="text"
                                placeholder="Search service name"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <img className="h-5 absolute top-[10px] left-2" src="/images/search.png" alt="search" />
                        </div>
                        {searchTerm ? (
                            <>
                                <p>Showing {filteredData.length} results matching '{searchTerm ? searchTerm : ' '}'</p>
                                <ul className='mt-3 h-[200px] overflow-auto custom-scrollbar'>
                                    {filteredData.map(item => (
                                        <div key={item.id} className='flex items-center justify-between mb-2'>
                                            <li className="flex items-center">
                                                <Checkbox
                                                    className="mr-2"
                                                    checked={isItemSelected(item.id)}
                                                    onCheckedChange={() => handleCheckboxChange(item)}
                                                />
                                                <span className='text-sm'>{item.name}</span>
                                            </li>
                                            <div className='flex items-center'>
                                                <p className='text-slate-500 text-xs capitalize'>{item.label} </p>
                                                <span className={`text-xs text-slate-400 ms-4 me-2  capitalize ${item.type === 'public' ? 'text-[#039855]' : 'text-[#BF8000]'}`}>{item.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <div className="mt-4">
                                <ul>
                                    {selectedItems.map(item => (
                                        <div key={item.id} className='flex items-center justify-between mb-2'>
                                            <div className='flex items-center '>
                                                <Checkbox
                                                    className="mr-2"
                                                    checked={isItemSelected(item.id)}
                                                    onCheckedChange={() => handleCheckboxChange(item)}
                                                />
                                                <li key={item.id} className='text-sm'>{item.name}</li>
                                            </div>
                                            <div className='flex items-center capitalize'>
                                                <p className='text-slate-500 text-xs'>{item.label} </p>
                                                <span className={`text-xs text-slate-400 ms-4 me-2 ${item.type === 'public' ? 'text-[#039855]' : 'text-[#BF8000]'}`}>{item.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                null
            )}

        </>
    );
};

export { ScheduledDateComponent, PeopleComponent, ServiceComponent };
