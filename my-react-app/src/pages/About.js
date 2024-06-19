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
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/developersTools.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDwRCqo9xpCuvRLbqj4ORlCXcM0u2yijbJrE39Fntk3egIhALBvEx%2BDVpK7HfibWrusqimdS6Gpc0VesvOaB5QXkDu7KoEDCCsQARoMMjI3NDAzMTg2MDUwIgxx02r1k2Tl23elHGIq3gLMeYAYOmWdzIOiZU%2FWfWa99mMe4BMRhZ3PGKrVnRfzbwXsxETkTooA9Xp%2FpWxVuiQhqV3wt1nmne02za3ruWPb394cVKVU6m6q7GBAolnFB06%2BCfoF982P3FqkgVlKdfPiVlxleuRFxhHrz2Q%2B0nW9D46w95pyiVhhMYfkBZOCXeThIN3Ub%2FBGa0n9YuDI5UwgHT%2FQOArO1wCJsTwD9eazMxDY6gXxH5b3hQ50tjBCFkUHu96ayi2foNda%2F4zbNHpqlqBt5Yb0kgPdtzWt5fOu6vjPwqRsAFUE0X2wa7yTK6Kqv9graD1Of8VFNOGLcbwJs%2BG2UlLnG2aU9kL9doIEkSwwD93Bh8%2FhFFA%2FJzpuAeVep5klgEbM0C4uGlcuIuda%2BVLvXWrzrQZ1BkyRVyJV4thSokfYdd8Wev%2FVogB4hUe8sW6z6IGcALp1AMskzBacBeXDG7C%2B7tY0Ous9%2FjDfhMqzBjqyAuCa8wKKuBFSYCDdQfqlBXIJQXOqWhkxDputarMstfQ%2Fa5VBKWp%2FfEhbxk9cFA4fK6CTLNAk3Poo3D01ubO63ngOqxG%2BbFT5BEXnEB1v4X6Af2K%2FnVYob5mOpf9UwEPZsq066KNrr1oSo3ZzRMONtUWhuVn6Y7QnryG4h%2FHznbdMzzt1G4QYmgkqxShRBPRVQOljIuHAhRiWLnvCbr07AezPEVl%2BL3rV7CK%2FflYP6YBgjJNiQFglu9GPVjGqGVooflyaNaxfp8o1y4DNr%2BhqwqKrLvCfC8fw0ZKwbi%2BYkz76t%2B8a5RJrgFtwFcjUe7obsqiCiZ25nvTP9BVbVbL0VNo%2B2X%2BiKqf92P9j9u73ig9YYDaqmrZ7SJfheMSkj%2BkIqllwu4dDtw2isd5MIMlYO06NIQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240619T110824Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATJ4SJH6BA5NSD4XQ%2F20240619%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=081e937a1794ee2371117e78897a6906d0ffde90689986729352eb5fa8b567d4" alt="img-1" />
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/aws-data-engineering.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDwRCqo9xpCuvRLbqj4ORlCXcM0u2yijbJrE39Fntk3egIhALBvEx%2BDVpK7HfibWrusqimdS6Gpc0VesvOaB5QXkDu7KoEDCCsQARoMMjI3NDAzMTg2MDUwIgxx02r1k2Tl23elHGIq3gLMeYAYOmWdzIOiZU%2FWfWa99mMe4BMRhZ3PGKrVnRfzbwXsxETkTooA9Xp%2FpWxVuiQhqV3wt1nmne02za3ruWPb394cVKVU6m6q7GBAolnFB06%2BCfoF982P3FqkgVlKdfPiVlxleuRFxhHrz2Q%2B0nW9D46w95pyiVhhMYfkBZOCXeThIN3Ub%2FBGa0n9YuDI5UwgHT%2FQOArO1wCJsTwD9eazMxDY6gXxH5b3hQ50tjBCFkUHu96ayi2foNda%2F4zbNHpqlqBt5Yb0kgPdtzWt5fOu6vjPwqRsAFUE0X2wa7yTK6Kqv9graD1Of8VFNOGLcbwJs%2BG2UlLnG2aU9kL9doIEkSwwD93Bh8%2FhFFA%2FJzpuAeVep5klgEbM0C4uGlcuIuda%2BVLvXWrzrQZ1BkyRVyJV4thSokfYdd8Wev%2FVogB4hUe8sW6z6IGcALp1AMskzBacBeXDG7C%2B7tY0Ous9%2FjDfhMqzBjqyAuCa8wKKuBFSYCDdQfqlBXIJQXOqWhkxDputarMstfQ%2Fa5VBKWp%2FfEhbxk9cFA4fK6CTLNAk3Poo3D01ubO63ngOqxG%2BbFT5BEXnEB1v4X6Af2K%2FnVYob5mOpf9UwEPZsq066KNrr1oSo3ZzRMONtUWhuVn6Y7QnryG4h%2FHznbdMzzt1G4QYmgkqxShRBPRVQOljIuHAhRiWLnvCbr07AezPEVl%2BL3rV7CK%2FflYP6YBgjJNiQFglu9GPVjGqGVooflyaNaxfp8o1y4DNr%2BhqwqKrLvCfC8fw0ZKwbi%2BYkz76t%2B8a5RJrgFtwFcjUe7obsqiCiZ25nvTP9BVbVbL0VNo%2B2X%2BiKqf92P9j9u73ig9YYDaqmrZ7SJfheMSkj%2BkIqllwu4dDtw2isd5MIMlYO06NIQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240619T111008Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATJ4SJH6BA5NSD4XQ%2F20240619%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=95e4308f215a8e245c45c22e7fac6d62f4bd1def15823c7df1cb682688df9718" alt="img-2" />
                    <img src="https://aws-presentation-web.s3.eu-west-1.amazonaws.com/images/solutions-archit%20-%20Copy.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJIMEYCIQDwRCqo9xpCuvRLbqj4ORlCXcM0u2yijbJrE39Fntk3egIhALBvEx%2BDVpK7HfibWrusqimdS6Gpc0VesvOaB5QXkDu7KoEDCCsQARoMMjI3NDAzMTg2MDUwIgxx02r1k2Tl23elHGIq3gLMeYAYOmWdzIOiZU%2FWfWa99mMe4BMRhZ3PGKrVnRfzbwXsxETkTooA9Xp%2FpWxVuiQhqV3wt1nmne02za3ruWPb394cVKVU6m6q7GBAolnFB06%2BCfoF982P3FqkgVlKdfPiVlxleuRFxhHrz2Q%2B0nW9D46w95pyiVhhMYfkBZOCXeThIN3Ub%2FBGa0n9YuDI5UwgHT%2FQOArO1wCJsTwD9eazMxDY6gXxH5b3hQ50tjBCFkUHu96ayi2foNda%2F4zbNHpqlqBt5Yb0kgPdtzWt5fOu6vjPwqRsAFUE0X2wa7yTK6Kqv9graD1Of8VFNOGLcbwJs%2BG2UlLnG2aU9kL9doIEkSwwD93Bh8%2FhFFA%2FJzpuAeVep5klgEbM0C4uGlcuIuda%2BVLvXWrzrQZ1BkyRVyJV4thSokfYdd8Wev%2FVogB4hUe8sW6z6IGcALp1AMskzBacBeXDG7C%2B7tY0Ous9%2FjDfhMqzBjqyAuCa8wKKuBFSYCDdQfqlBXIJQXOqWhkxDputarMstfQ%2Fa5VBKWp%2FfEhbxk9cFA4fK6CTLNAk3Poo3D01ubO63ngOqxG%2BbFT5BEXnEB1v4X6Af2K%2FnVYob5mOpf9UwEPZsq066KNrr1oSo3ZzRMONtUWhuVn6Y7QnryG4h%2FHznbdMzzt1G4QYmgkqxShRBPRVQOljIuHAhRiWLnvCbr07AezPEVl%2BL3rV7CK%2FflYP6YBgjJNiQFglu9GPVjGqGVooflyaNaxfp8o1y4DNr%2BhqwqKrLvCfC8fw0ZKwbi%2BYkz76t%2B8a5RJrgFtwFcjUe7obsqiCiZ25nvTP9BVbVbL0VNo%2B2X%2BiKqf92P9j9u73ig9YYDaqmrZ7SJfheMSkj%2BkIqllwu4dDtw2isd5MIMlYO06NIQ%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240619T111104Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATJ4SJH6BA5NSD4XQ%2F20240619%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Signature=e7db0bca128d38d2aed53dc2ed0edf77fabd4ced3a616bbc349b1e4dc7c313ad" alt="img-3" />
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