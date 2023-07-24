"use client";

import ImageShared from '@/app/shared/components/Image/image';
import { FC } from 'react';
import { iconTestData, imageTestData } from './config/image.config';
import IconShared from '@/app/shared/components/icon/icon';

interface IImageAndIconTestModel { }

const ImageAndIconTest: FC<IImageAndIconTestModel> = ({ }) => {
    const imageArr = imageTestData;
    const iconArr = iconTestData;
    return (
        <div className='flex justify-center items-center h-screen bg-red-50'>
            <div className='w-1/2 text-center h-min bg-slate-400'>
                <h2 className='p-2'>Image test example</h2>
                <hr />
                {!!imageArr && imageArr.map(image =>
                (
                    <div className='p-3' key={image.id}>
                        {image.label} -
                        <ImageShared width={200} imageSrc={image.img} styleClass='mx-auto' />
                    </div>
                )
                )}
                <hr />
                <h2 className='p-2'>Icon test example</h2>
                <hr />
                {
                    !!iconArr && iconArr.map(icon =>
                        (
                            <div className='p-3' key={icon.id}>
                            {icon.label} -
                            <IconShared width={200} iconSrc={icon.icon} styleClass='mx-auto' />
                        </div>
                        ))
                }
            </div>
        </div>
    );
};

export default ImageAndIconTest;