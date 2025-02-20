import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { useDispatch } from 'react-redux';
import { SetSearchedQuery } from '@/react-redux/slice/jobSlice';

const filterData = [
    {
        filterType: "Location",
        array: ["Dhaka", "Chittagong", "Jessore", "Cox's Bazar"]
    },

    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "Data Science", "FullStack Developer", "React Developer", "Python Developer"]
    },

    {
        filterType: "Salary",
        array: ["0-20k", "21-50k", "51-80k", "81k-1lakh"]
    }


]

const FilterCard = () => {

    const [selcectedValue, setSelectedValue] = useState("")
    const dispatch = useDispatch()

    const Changehandler = (value) => {
        setSelectedValue(value)
    }

    useEffect(() => {
        //console.log(selcectedValue)
        dispatch(SetSearchedQuery(selcectedValue))
    }, [selcectedValue])


    return (

        <>
            <div>
                <h1 className='font-bold text-2xl'>Filter Jobs</h1>
                <hr className='mt-3 mb-2 border border-orange-700' />

                <RadioGroup value={selcectedValue} onValueChange={Changehandler}>
                    {
                        filterData.map((filterInformation, i) => (
                            < div key={i} >
                                <h1 className='font-bold text-lg'>{filterInformation.filterType}</h1>

                                {
                                    filterInformation.array.map((item, idx) => {

                                        const itemId = `r${i}-${idx}`
                                        return (
                                            <div key={idx} className='flex items-center gap-2 my-2'>
                                                <RadioGroupItem value={item} id={itemId} />
                                                <Label htmlFor={itemId}> {item}</Label>

                                            </div>
                                        )
                                    })

                                    //     filterInformation.array.map((item, i) => (
                                    // <div key={i} className='flex items-center gap-2 my-2'>
                                    //     <RadioGroupItem value={item} />
                                    //     <Label> {item}</Label>

                                    // </div>
                                    // ))
                                }

                            </div>
                        ))

                    }
                </RadioGroup >


            </div >

        </>

    );
};

export default FilterCard;