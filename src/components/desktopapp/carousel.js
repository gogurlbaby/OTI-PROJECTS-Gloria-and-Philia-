import React from 'react';
import { useState, useEffect} from 'react';
import { Image } from 'semantic-ui-react';
import virtual from '../../images/virtual.jpg';
// import organic from '../../images/oti-photo.jpg';
import {TransitionablePortal, Segment, Button, Header, Icon} from 'semantic-ui-react';


const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [isShown, setIsShown] = useState(false)
    console.log(isShown)

    const onMouseenterhandler = (e) =>{
        console.log(e)
        setIsShown(prev => {return !prev})
    }

    const onclose = () =>{
        setIsShown( false )
    }

    const gallery = [virtual]

    const nextSlide = () => {
        setIndex(
            prevIndex => {
                if (prevIndex === gallery.length - 1) {
                    return 0
                }
                else {
                    return prevIndex + 1
                }

            }
        )
    }

    
    useEffect(() => {
        const autoPlay = setInterval(nextSlide, 5000);
        
        return () => clearInterval(autoPlay);
    }, [nextSlide]);

    return (
        <>
            <Image src={gallery[index]} fluid style={{height: '70vh'}} onMouseEnter={onMouseenterhandler}/>
            <TransitionablePortal
                open={isShown}
                transition={{animation: 'zoom', duration: 500}}
            >
                <Segment
                    style={{
                        left: '30%',
                        position: 'fixed',
                        top: '30%',
                        zIndex: 1000,
                    }}
                >
                    <Header textAlign="center">About OTI</Header>
                    <p>OTI is an Organic and Trade Investments Company</p>
                    {/* <p>To close, simply click the close button or click away</p> */}
                    <Button basic animated color='yellow' style={{marginLeft: '38%'}}>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Segment>
            </TransitionablePortal>
        </>
    )
}

export default Carousel;