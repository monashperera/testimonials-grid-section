import data from '../data/testimonial-data.json';

export default function Main() {
    return (
        <main>
            <div className="container">
                {data && data.map((item) => (
                    <div key={item.id} className={`item-${item.id}`}>
                        <div className='card-info'>
                            <div>
                                <img className='img-user' src={require(`../assets/images/${item.imgName}`)} alt={item.name} />
                            </div>
                            <div>
                                <h3 className='user-name'>
                                    {item.name}
                                </h3>
                                <h4 className='user-designation'>
                                    {item.designation}
                                </h4>
                            </div>
                        </div>
                        <div>
                            <p className='user-testi-1'>
                                {item.text1}
                            </p>
                        </div>
                        <div>
                            <p className='user-testi-2'>
                                “{item.text2}”
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};