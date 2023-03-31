import { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardActionArea, CardActions, Grid, Typography } from '@mui/material';
import Header from 'components/Header';

const Screenshot = () => {

  const [show, setShow] = useState(false);

  const [screendata, setScreenData] = useState([]);

  useEffect(() => {

    async function getUserScreen() {
      try {
        const response = await axios.get("http://localhost:5000/api/screenshort");
        const data = await response.data;
        setScreenData(data)
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    getUserScreen()

  }, [])

  return (

    <Box>
 <Header title="Screenshot" subtitle="Screenshot of the Employees" />
      <Box sx={{ flexGrow: 1 ,mt:2}}>
      <Grid container spacing={2} columns={12}>
      {screendata ? (screendata.map((item, d) => {
          //    console.log(item._id)
          //    console.log(item.username)
          //    console.log(item.uploadedAt)

          return (
              <Grid item  md={3} sm={2} >
              <Card  key={item._id} onClick={() => setShow(true)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt="green iguana"
                />
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Typography variant='h6' sx={{ fontSize: '10px' ,color:'#000'}}>{item.uploadedAt}</Typography>
                </Button>
              </CardActions>
            </Card>
              </Grid>
             
         

            


          )


        }))
          : (
            <>Loading...</>
          )
      }
   </Grid>
          </Box>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        style={{ margin: 50 }}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Screenshot
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel slide={false}>

            {
              screendata.map((item, d) => {
                return (
                  <Carousel.Item>
                    <div className='mb-4' key={item._id} >
                      <img
                        className="d-block w-100vw h-100vh"
                        src={item.image}
                        alt="First slide"
                      />
                    </div>
                  </Carousel.Item>
                )
              })

            }
          </Carousel>
        </Modal.Body>
      </Modal>




    </Box>
  );
}



export default Screenshot;
