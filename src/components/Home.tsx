import '../index.css'
import logo from '../../public/Logo.png'
import {AppBar, Box, FormControl, InputBase, InputLabel, MenuItem, Select, Slider, TextField, Toolbar} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

function Home() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        width: '100%',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));
    let typeApartment;

    function handleChange() {

    }

    return (
        <>
            <section className='flex' id=''>
                <img src={logo} alt='logo' className='img_logo'/>
                <h1 className='flex align_center'>Airbnbeach</h1>
            </section>
            <section className={"flex mx-16"}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Search sx={{
                                width: '1/2'
                            }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Look for your vacation beach ..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    style={{ fontSize: '16px' }}
                                />
                            </Search>
                        </Toolbar>
                    </AppBar>
                </Box>
                {/*<div className='flex' id='search_bar'>
                    <p>Look for your vacation beach ...</p>
                    <button>
                        <img src='https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png' id='img_search'/>
                    </button>
                </div>*/}
            </section>
            <section className={"flex items-center mx-16 my-5 w-full justify-center"}>
                <article className={"flex-1"}>
                    <TextField id="outlined-basic" label="Town" variant="outlined" />
                </article>
                <article className={"flex-1"}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={typeApartment}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Appartement</MenuItem>
                            <MenuItem value={20}>House</MenuItem>
                            <MenuItem value={30}>Loft</MenuItem>
                        </Select>
                    </FormControl>
                </article>
                <article className={"flex-1"}>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                    />
                </article>
            </section>
        </>
    )
}

export default Home
