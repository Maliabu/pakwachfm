import Carousel from 'react-bootstrap/Carousel';
import Logo from '../images/logo.png'

function Headlines() {
  return (
    <div>
    <div className='d-sm-block d-md-none d-lg-none'>
    <Carousel prevIcon={<div></div>} nextIcon={<div></div>} indicators={false}>
      <Carousel.Item>
      <div className='row'>
        <div className='col-6 p-3 text-start text-dark'>
            <h6>the harvest</h6>
            <h5>High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>the harvest: more on twitter</a></h6></h5>
            <h6>Nov 2021 | PAKWACH FM</h6>
        </div>
        <div className='col-6 p-3 text-start text-dark'>
            <h6>in town</h6>
            <h5>Facts/News Update: What is the state of public transport now in Pakwach?</h5>
            <h6>Feb 2023 | PAKWACH FM</h6>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
        <div className='col-6 p-3 text-start text-dark'>
            <h6>emyooga saga</h6>
            <h5>Pakwach Emyooga officials face threats, intimidations over delayed Funds<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>find out what happened</a></h6></h5>
            <h6>Mar 2021 | PAKWACH FM</h6>
        </div>
        <div className='col-6 p-3 text-start text-dark'>
            <h6>the harvest</h6>
            <h5>High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>the harvest: more on twitter</a></h6></h5>
            <h6>Nov 2021 | PAKWACH FM</h6>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='d-none d-md-block d-lg-block'>
    <Carousel prevIcon={<div></div>} nextIcon={<div></div>} indicators={false}>
      <Carousel.Item>
      <div className='row'>
        <div className='col-4 p-3 text-start text-dark'>
            <h6>the harvest</h6>
            <h5>High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>the harvest: more on twitter</a></h6></h5>
            <h6>Nov 2021 | PAKWACH FM</h6>
        </div>
        <div className='col-4 p-3 text-start text-dark'>
            <h6>in town</h6>
            <h5>Facts/News Update: What is the state of public transport now in Pakwach?</h5>
            <h6>Feb 2023 | PAKWACH FM</h6>
        </div>
        <div className='col-4 p-3 text-start text-dark'>
            <h6>emyooga saga</h6>
            <h5>Pakwach Emyooga officials face threats, intimidations over delayed Funds<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>find out what happened</a></h6></h5>
            <h6>Mar 2021 | PAKWACH FM</h6>
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='row'>
      <div className='col-4 p-3 text-start text-dark'>
            <h6>fishing in pakwach</h6>
            <h5>Young boys fishing in flooded area in Amor Parish Pakwach district.<h6 className='link py-3'><a href='https://twitter.com/PakwachF/status/1318988294093406208/photo/1'>more news</a></h6></h5>
            <h6>Nov 2021 | PAKWACH FM</h6>
        </div>
        <div className='col-4 p-3 text-start text-dark'>
            <h6>the harvest</h6>
            <h5>High quality Sorghum and Sim Sim in Pakwach District. This month is the harvesting season.<h6 className='link py-3'><a href='https://twitter.com/PakwachF'>the harvest: more on twitter</a></h6></h5>
            <h6>Nov 2021 | PAKWACH FM</h6>
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Headlines;