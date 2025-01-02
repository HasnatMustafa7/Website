import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import rev1 from "../assets/images/rev1.jpg"
import rev2 from "../assets/images/rev2.jpg"
import rev3 from "../assets/images/rev3.jpg"

var testimonialsData = [
  {
    id: 1,
    name: 'John Wills',
    description: 'Absolutely thrilled with the creative design work provided! They captured our brand essence perfectly and delivered beyond expectations.',
    designation: 'Manager',
    img: rev1
  },
  {
    id: 2,
    name: 'Jasmine Perry',
    description: 'The SEO service was a game-changer for our business. Our website traffic has soared, and we are ranking higher than ever. Highly recommend!',
    designation: 'Accountant',
    img: rev3
  },
  {
    id: 3,
    name: 'Rocky Johnson',
    description: 'Top-notch service in creative design and SEO. They brought our ideas to life visually and strategically boosted our online visibility. Highly impressed and satisfied!',
    designation: 'CEO',
    img: rev2
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>reviews</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <div>
                      <img src={testimonials.img} className=' revImg ' />
                    </div>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;