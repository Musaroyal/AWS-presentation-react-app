import './About.css'
export default function About(){
   
    return(
        <>
        <section class="about" id="about">
        <div class="container">
            <h2>About Our Cohort</h2>
            <p>We are a dedicated group of AWS Junior Cloud Engineers who embarked on a journey to master AWS cloud technologies. Through rigorous training and hands-on experience, we have achieved AWS Cloud Practitioner and Associates certifications.</p>
        </div>
         </section>

         <div className='banner'>
            <div className='slider-wrapper'>
                <div className='image-list'>
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/aws-data-engineering.png"/>
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/developersTools.png"/>
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/solutions-archit+-+Copy.png"/>
                </div>
            </div>
         </div>
         <section class="about" id="about">
        <div class="container">



            <h2>Projects' Overview</h2>
            <p>
                From the outset, Pax Divitiae pledged unwavering support, encouraging us to explore our potential in innovation.
    
                We've delved into diverse projects to master various AWS services, like Amazon S3 for storage, Lambda functions, Amazon Pinpoint, Q, Comprehend, and Connect, enhancing customer experiences.
                
                One project focused on data collection, where we crafted a web-based form for user interaction and data storage on S3.
                
                We streamlined Pax Divitiae's call center operations with Amazon Connect, employing Pinpoint for targeted marketing and Comprehend for automated email responses.
                
                Additionally, we're developing a chatbot powered by Amazon Q for customer interaction, broadening our expertise as junior AWS cloud engineers.
            </p>
        </div>
    
    </section>
        </>
    ) 
}