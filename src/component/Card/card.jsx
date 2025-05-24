import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {useNavigate} from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


const  MultiActionAreaCard = ({data, cols, id, path})=> {
    console.log("params", data,cols,id,path);


    const navigate = useNavigate();
    let value = null;
    const openLink = (path)=>{
        navigate(path);
    }
    return (

        <div id="modal-detail" className="flex lg:hidden">
            <div className="modal-container w-[90%]">
                <div className="modal-header">Detail Bill</div>
                <div className="modal-body p-[15px] h-[90%]">
                    <Card className="lg:hidden" sx={{ height: '100%', width: '100%' }}>
                        <CardContent>
                            <Typography  sx={{ transform:'translateY(-30%)' }} gutterBottom variant="h5" component="div">
                                {id}
                            </Typography>
                            {data.map((row,stt) => {
                                const values = Object.values(row);
                                return (
                                    <Accordion key={stt}>
                                        <AccordionSummary

                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography component="span">Sản phẩm {stt+1}</Typography>
                                        </AccordionSummary>
                                        {values.map((value, i)=>(
                                            <AccordionDetails key={`${id}-${i}`}>
                                                {cols[i]} - {value}
                                            </AccordionDetails>
                                        ))}
                                    </Accordion>
                                )
                            })}

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>


    );
}
export default MultiActionAreaCard;