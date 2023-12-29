import './Images.css';

export default function Images() {
    return(
        <div className="images-container">
            <img src="/image28.png" alt="image28" className='image-28' />
            <div className='images-container-2'>
                <img src="/image30.png" alt="image30" className='image-30' />
                <img src="/image26.png" alt="image26" className='image-26' />
            </div>
            <div className='images-container-3'>
                <img src="/image27.png" alt="image27" className='image-27' />
                <img src="/image29.png" alt="image29" className='image-29' />
            </div>
            <div className='images-container-4'>
                <img src="/image22.png" alt="image22" className='image-22' />
                <img src="/image23.png" alt="image23" className='image-23' />
            </div>
            <div className='images-container-5'>
                <img src="/image25.png" alt="image25" className='image-25' />
                <img src="/image24.png" alt="image24" className='image-24' />
            </div>
        </div>
    );
}