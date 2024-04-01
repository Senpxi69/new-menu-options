import React from 'react'
import { Button } from '@mantine/core'

function UploadSubtitlesButton() {
    return (
        <div className='p-2'>
            <Button
                size="lg"
                className=" m-1 bg-gray-100 border border-gray-300 hover:border-blue-500 flex flex-col justify-center items-center"
                style={{
                    width: '100%',
                    height: 'auto',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'none',
                    padding: '16px',
                }}
            >
                <div className="flex justify-stretch items-center">
                    <div className='flex justify-start items-center'>
                        <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg" ><g clip-path="url(#clip0)"><g><path d="M62.4805 12.7592C62.4805 8.36279 62.4805 6.16459 61.6249 4.48539C60.8723 3.00832 59.6714 1.80742 58.1943 1.05482C56.5151 0.199219 54.3169 0.199219 49.9205 0.199219H13.0404C8.64404 0.199219 6.44584 0.199219 4.76664 1.05482C3.28957 1.80742 2.08867 3.00832 1.33607 4.48539C0.480469 6.16459 0.480469 8.36279 0.480469 12.7592V35.6392C0.480469 40.0356 0.480469 42.2338 1.33607 43.9131C2.08867 45.3901 3.28957 46.591 4.76664 47.3436C6.44584 48.1992 8.64404 48.1992 13.0405 48.1992H41.6396C43.5519 48.1992 44.508 48.1992 45.4082 47.9839C46.2063 47.7931 46.9696 47.4782 47.6702 47.0509C48.4604 46.5689 49.1385 45.8948 50.4947 44.5466L58.7756 36.3142C60.1427 34.9551 60.8263 34.2755 61.3152 33.4813C61.7487 32.7772 62.0682 32.0091 62.262 31.2052C62.4805 30.2986 62.4805 29.3347 62.4805 27.4069V12.7592Z" fill="#C5C7D0"></path><path d="M62.4805 12.7592C62.4805 8.36279 62.4805 6.16459 61.6249 4.48539C60.8723 3.00832 59.6714 1.80742 58.1943 1.05482C56.5151 0.199219 54.3169 0.199219 49.9205 0.199219H13.0404C8.64404 0.199219 6.44584 0.199219 4.76664 1.05482C3.28957 1.80742 2.08867 3.00832 1.33607 4.48539C0.480469 6.16459 0.480469 8.36279 0.480469 12.7592V35.6392C0.480469 40.0356 0.480469 42.2338 1.33607 43.9131C2.08867 45.3901 3.28957 46.591 4.76664 47.3436C6.44584 48.1992 8.64404 48.1992 13.0405 48.1992H41.6396C43.5519 48.1992 44.508 48.1992 45.4082 47.9839C46.2063 47.7931 46.9696 47.4782 47.6702 47.0509C48.4604 46.5689 49.1385 45.8948 50.4947 44.5466L58.7756 36.3142C60.1427 34.9551 60.8263 34.2755 61.3152 33.4813C61.7487 32.7772 62.0682 32.0091 62.262 31.2052C62.4805 30.2986 62.4805 29.3347 62.4805 27.4069V12.7592Z" fill="url(#paint0_linear)" fill-opacity="0.2"></path></g><g opacity="0.5"><path d="M38.2184 21.1703C37.4415 17.5381 33.9764 14.8672 29.8087 14.8672C24.5036 14.8672 20.6183 19.1159 21.093 23.1733C19.1985 24.0543 17.916 25.9884 17.916 28.0894C17.916 31.0911 20.3841 33.5339 23.417 33.5339H38.4531C41.9287 33.5339 44.74 30.751 44.74 27.3116C44.74 23.9547 42.0518 21.037 38.2184 21.1703Z" fill="white" fill-opacity="0.5"></path></g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M31.1147 29.699C30.6422 29.699 30.2591 29.3181 30.2591 28.8483L30.2591 24.411C30.2591 23.9411 30.6422 23.5603 31.1147 23.5603C31.5873 23.5603 31.9704 23.9411 31.9704 24.411L31.9704 28.8483C31.9704 29.3181 31.5873 29.699 31.1147 29.699Z" fill="white" fill-opacity="0.9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.1147 29.699C30.6422 29.699 30.2591 29.3181 30.2591 28.8483L30.2591 24.411C30.2591 23.9411 30.6422 23.5603 31.1147 23.5603C31.5873 23.5603 31.9704 23.9411 31.9704 24.411L31.9704 28.8483C31.9704 29.3181 31.5873 29.699 31.1147 29.699Z" fill="url(#paint1_linear)" fill-opacity="0.2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2101 25.8394C27.8759 25.5072 27.8759 24.9686 28.2101 24.6364L30.411 22.4484C30.7452 22.1162 31.287 22.1162 31.6212 22.4484C31.9553 22.7806 31.9553 23.3192 31.6212 23.6514L29.4202 25.8394C29.0861 26.1716 28.5443 26.1716 28.2101 25.8394Z" fill="white" fill-opacity="0.9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2101 25.8394C27.8759 25.5072 27.8759 24.9686 28.2101 24.6364L30.411 22.4484C30.7452 22.1162 31.287 22.1162 31.6212 22.4484C31.9553 22.7806 31.9553 23.3192 31.6212 23.6514L29.4202 25.8394C29.0861 26.1716 28.5443 26.1716 28.2101 25.8394Z" fill="url(#paint2_linear)" fill-opacity="0.2"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.8221 25.8394C33.4879 26.1716 32.9462 26.1716 32.612 25.8394L30.411 23.6514C30.0769 23.3192 30.0769 22.7806 30.411 22.4484C30.7452 22.1162 31.287 22.1162 31.6212 22.4484L33.8221 24.6364C34.1563 24.9686 34.1563 25.5072 33.8221 25.8394Z" fill="white" fill-opacity="0.9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.8221 25.8394C33.4879 26.1716 32.9462 26.1716 32.612 25.8394L30.411 23.6514C30.0769 23.3192 30.0769 22.7806 30.411 22.4484C30.7452 22.1162 31.287 22.1162 31.6212 22.4484L33.8221 24.6364C34.1563 24.9686 34.1563 25.5072 33.8221 25.8394Z" fill="url(#paint3_linear)" fill-opacity="0.2"></path></g></g><defs><linearGradient id="paint0_linear" x1="31.4805" y1="0.199219" x2="31.4805" y2="48.1992" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="31.0161" y1="22.1992" x2="31.0161" y2="29.699" gradientUnits="userSpaceOnUse"><stop stop-color="#0098FD" stop-opacity="0"></stop><stop offset="1" stop-color="#0098FD"></stop></linearGradient><linearGradient id="paint2_linear" x1="31.0161" y1="22.1992" x2="31.0161" y2="29.699" gradientUnits="userSpaceOnUse"><stop stop-color="#0098FD" stop-opacity="0"></stop><stop offset="1" stop-color="#0098FD"></stop></linearGradient><linearGradient id="paint3_linear" x1="31.0161" y1="22.1992" x2="31.0161" y2="29.699" gradientUnits="userSpaceOnUse"><stop stop-color="#0098FD" stop-opacity="0"></stop><stop offset="1" stop-color="#0098FD"></stop></linearGradient><clipPath id="clip0"><rect width="62" height="48" fill="white" transform="translate(0.480469 0.199219)"></rect></clipPath></defs></svg>
                        <p className=' text-gray-500 text-sm ml-1'>Upload a Subtitle file</p>
                    </div>
                    <p>&#11166;</p>
                </div>

            </Button>
        </div>
    )
}

export default UploadSubtitlesButton