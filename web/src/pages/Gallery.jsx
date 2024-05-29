import { FC, useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import {LightGallery as ILightGallery} from 'lightgallery/lightgallery.umd';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

export const Gallery = () => {
    const lightGalleryRef = useRef < ILightGallery > null;
    const containerRef = useRef(null);
    const [galleryContainer, setGalleryContainer] = useState(null);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGalleryRef.current = detail.instance;
            lightGalleryRef.current.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer(containerRef.current);
        }
    }, []);
    return (
        <div className="Gallery">
            <div style={{ height: '800px' }} ref={containerRef}></div>
            <LightGallery
                container={galleryContainer}
                onInit={onInit}
                plugins={[lgZoom, lgThumbnail]}
                dynamic={true}
                dynamicEl={[
                    {
                        src: '...',
                        responsive: '...',
                        thumb: '...',
                        subHtml: `...`,
                    },
                    {
                        src: '...',
                        responsive: '...',
                        thumb: '...',
                        subHtml: `...`,
                    },
                ]}
            />
        </div>
    );
};