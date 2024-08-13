import React, { useState, useRef, useEffect } from 'react';
import './index.css'

const Mani = [
    {
        title: 'HR',
        content: 'Master HR skills with clear and specialized workshop and become an human resource expert.',
        anchor: 'https://hubnex.in/',
        pyara: 'A personalized learning path tailored to educational content'



    },

    {
        title: 'Data Science',
        content: 'Master HR skills with clear and specialized workshop and become an human resource expert.',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'Marketing',
        content: 'Master Marketing with clear and specialized workshop and become an marketing expert.',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'UIUX',
        content: 'Master UIUX with clear and specialized workshop and become an design expert',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'Finance',
        content: 'Master Finance with clear and specialized workshop and become an finance expert.',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'Front End',
        content: 'Master Front-end with clear and specialized workshop and become an frontend expert.',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'AIML',
        content: 'Master AIML with clear and specialized workshop and become an AIML expert.',
        anchor: 'https://hubnex.in/'


    },

    {
        title: 'Full Stack',
        content: ' Master Full Stack with clear and specialized workshop and become an Full stack expert.',
        anchor: 'https://hubnex.in/'


    }
]
const Cards = () => {

    const [scrollPosition, setNewScroll] = useState(0);
    const containerRef = useRef(null);

    const forwardHandler = () => {
        containerRef.current.scrollBy({
            left: '361',
            behavior: 'smooth'
        })
    };

    const PreviousHandler = () => {
        containerRef.current.scrollBy({
            left: '-361',
            behavior: 'smooth'
        })
    };


    useEffect(() => {
        const container = containerRef.current;
        let isScrolling = false;
        const handleScroll = () => {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(() => {
                    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                        container.scrollLeft = 0;
                        setNewScroll(0);
                    }
                    isScrolling = false;
                })
            }



        }
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll)
    }, []);


    const CardsTitle = () => {
        return (
            <div className='Cardstitle-details'>
                <h4 className='head1' >Comprehensive Services Tailored for Success</h4>
                <p className='para1' > Expert academic counseling, our services are designed to </p>
                <p className='para'>  meet your every educational needs </p>



                <div className='div-viewmore'><a className='anchor-viewmore' href="https://hubnex.in/"> <h6> View more </h6>  <i class="fa-solid fa-angle-right"></i> </a></div>
            </div>
        )
    }



    return (
        <div className='Cards-body'>

            <CardsTitle />


            <div className='Cards-Container-body' ref={containerRef}>

                {
                    Mani.map(each => <div>  <div className='Cards-Container'> <h1 className='title'> {each.title}  </h1>  <h1 className='title1'> {each.title}  </h1> <p className='paragraph'> {each.content} </p>  <p className='new' >  {each.content}  </p> <a className='anchor-content' href={each.anchor}><button className='button-link'>+</button></a>


                    </div>  <div className='pyara1'> {each.pyara} </div> </div>
                    )

                }


            </div>

            <div className='button-control-div'>

                <button className='Buttons-container' onClick={PreviousHandler}><i class="fa-solid fa-arrow-left"></i></button>
                <button className='Buttons-container' onClick={forwardHandler}><i class="fa-solid fa-arrow-right"></i></button>

            </div>

        </div>
    )
}

export default Cards
