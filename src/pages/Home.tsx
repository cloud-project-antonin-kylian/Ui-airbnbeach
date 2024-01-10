import '../index.css';
import {
    FormControl,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Slider,
    TextField,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Header from "../components/Header.tsx";
import CardHousing from "../components/CardHousing.tsx";

// Define the type for the range state
type RangeType = [number, number];

function Home() {
    let typeApartment;
    const [range, setRange] = React.useState<RangeType>([5, 30]);
    const [startDate, setStartDate] = React.useState<Date>(new Date());

    const handleChange = ( _event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) { return; }
        if (activeThumb === 0) {
            setRange([Math.min(newValue[0], range[1]), range[1]]);
        } else {
            setRange([range[0], Math.max(newValue[1], range[0])]);
        }
    };

    return (
        <>
            <Header></Header>
            {/* -- Search bar  -- */}
            <section className={"flex items-center mx-16 my-5 justify-center bg-green-200 py-3 rounded-2xl"}>
                <div className={"w-40 mx-12"}>
                    <TextField id="outlined-basic" label="Town" variant="outlined" />
                </div>
                <div className={"w-40 mx-12"}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={typeApartment}
                            label="Age"
                        >
                            <MenuItem value={10}>Apartment</MenuItem>
                            <MenuItem value={40}>Experience</MenuItem>
                            <MenuItem value={20}>House</MenuItem>
                            <MenuItem value={30}>Loft</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={"w-52 mx-12"}>
                    <Slider value={range}
                            onChange={handleChange}
                            valueLabelDisplay="auto"/>
                    <p className={"italic text-black"}>Between : {range[0]} - {range[1]} $/night</p>
                </div>
                <div className={"w-32 mx-12 mr-32 flex"}>
                    <DatePicker selected={startDate} onChange={(date : Date) => setStartDate(date)} className={"text-center bg-transparent text-black rounded py-3 border-gray-400 border"}/>
                </div>
                <Link href="#">
                    <SearchIcon sx={{
                        fontSize: 40,
                        color: "black",
                    }}/>
                </Link>
            </section>
            {/* -- Apartment --*/}
            <section className={"flex mx-16"}>
                <CardHousing
                    url={"https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720"}
                    title={"Abiansemal, indonésia"}
                    description={"Looking for a first-class vacation home with a historic ambience? Then this unique property with huge castle grounds would be the perfect choice."}
                    price={"82"}
                />
                <CardHousing
                    url={"https://a0.muscache.com/im/pictures/dd8d7c26-ab53-439b-bd93-77213d8d5156.jpg?im_w=720"}
                    title={"Les Galeras, Republic Dominica"}
                    description={"Looking for a first-class vacation home with a historic ambience? Then this unique property with huge castle grounds would be the perfect choice."}
                    price={"78"}
                />
                <CardHousing
                    url={"https://a0.muscache.com/im/pictures/miso/Hosting-826800524178117410/original/3ed86cb2-4019-48d7-9b85-0c0cdf9fdb0a.jpeg?im_w=720"}
                    title={"La Barbade, Barbade"}
                    description={"Looking for a first-class vacation home with a historic ambience? Then this unique property with huge castle grounds would be the perfect choice."}
                    price={"96"}
                />
            </section>
        </>
    )
}

export default Home
