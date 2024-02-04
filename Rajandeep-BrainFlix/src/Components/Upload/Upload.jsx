import React, { useState } from 'react';
import Header from '../Header/Header';
import './Upload.scss';
import { v4 as uuidv4 } from 'uuid';
import axios  from 'axios';
import Avatar from '../../Assets/Images/Upload-video-preview.jpg';

function Upload() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const takeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newVideo = {
            id: uuidv4(),
            title: formData.title,
            description: formData.description,
            image: `https://wallpapers.com/images/hd/cat-pet-6byc7qijbvymbk09.webp`, 
            views: 1000,
            likes: 7000,
            channel: 'Rajan Channel',
            duration: '5:00', 
            video: '/public/images/img1.png', 
            timestamp: Date.now(),
            comments: [
                {
                    id: uuidv4(),
                    name: 'Hippolyte Taine',
                    comment: 'I have studied many philosophers and many cats. The wisdom of cats is infinitely superior.',
                    likes: 200,
                    timestamp: Date.now(),
                },
                {
                    id: uuidv4(),
                    name: 'Cleveland Amory',
                    comment: 'As anyone who has ever been around a cat for any length of time well knows, cats have enormous patience with the limitations of the humankind.',
                    likes: 710,
                    timestamp: Date.now(),
                },
                {
                    id: uuidv4(),
                    name: 'Bill Dana',
                    comment: 'I had been told that the training procedure with cats was difficult. It’s not. Mine had me trained in two days.',
                    likes: 340,
                    timestamp: Date.now(),
                },
                {
                    id: uuidv4(),
                    name: 'Terry Pratchett',
                    comment: 'In ancient times cats were worshipped as gods; they have not forgotten this.',
                    likes: 110,
                    timestamp: Date.now(),
                },
            ],
        };

        try {
            const response = await axios.post('http://localhost:8000/videos',newVideo);

            if (response.status === 201) {
                console.log('Video successfully uploaded!');
                setFormData({
                    title: '',
                    description: '',
                });
            } else {
                console.error('Failed to upload video.');
            }
        } catch (error) {
            console.error('Error uploading video:', error);
        }
    };

    return (
        <>
            <div className='Upload'>
                <Header />
            </div>
            <div className='Heading'>
                <h2>Upload Video</h2>
                <div className='Upload__container'>
                <div className="Upload__container-left">
                <label htmlFor="comment" className="Upload__container-left--imagetop">VIDEO THUMBNAIL:
                </label>
                <img className="Upload__container-left--image" width="100%" src={Avatar}  alt="avatar" />
            </div>
                    <div className='Upload__container-right'>
                        <form className='Upload__container-right--form' onSubmit={handleSubmit}>
                            <div className='Upload__container-right--form---label'>
                                <div className='Upload__container-top'>
                                    <label className='Upload__container-right--form---label----label'>TITLE YOUR VIDEO:</label>
                                    <input
                                        type='text'
                                        name='title'
                                        value={formData.title}
                                        onChange={takeInput}
                                        placeholder='Add a title to Your Video'
                                        className='Upload__container-right--form---label----text'
                                    />
                                </div>
                                <div className='Upload__container-top'>
                                    <label htmlFor='description' className='Upload__container-right--form---label----label'>
                                        ADD A DESCRIPTION:
                                    </label>
                                    <textarea
                                        type='text'
                                        rows='6'
                                        id='description'
                                        name='description'
                                        value={formData.description}
                                        onChange={takeInput}
                                        placeholder='Add a Description to Your Video'
                                        className='Upload__container-right--form---label----text'
                                    />
                                </div>
                            </div>
                            <div className='Upload__container-right--form---button'>
                                <button type='button' className='Upload__container-right--form---button1' href='#'>
                                    CANCEL
                                </button>
                                <button type='submit' className='Upload__container-right--form---button1' href='#'>
                                    PUBLISH
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Upload;
