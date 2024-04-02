import React from 'react'
import { Button } from '@mantine/core'

function AutoSubtitle() {
    return (
        <div>
            <Button
                disabled onClick={() => console.log('Button clicked')}
                size="lg"
                className="m-1 bg-gray-100 border-none flex flex-col justify-center items-center"
                style={{
                    width: '192px',
                    height: '154px',
                    fontSize: '1.2rem',
                    color: 'black',
                    borderRadius: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.06) 0px,1px,1px',
                    padding: '16px',
                }}
            >
                <div className="flex flex-col justify-center items-center">
                    <svg width="63" height="48" viewBox="0 0 63 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><g><rect x="0.480469" width="62" height="48" rx="7.84999" fill="#C5C7D0"></rect><rect x="0.480469" width="62" height="48" rx="7.84999" fill="white" fill-opacity="0.2"></rect></g><g filter="url(#filter1_di)"><path d="M21.2718 25.1017C21.2718 25.3655 21.1729 25.6104 20.975 25.8365C20.7866 26.0626 20.5276 26.1756 20.1979 26.1756C19.9812 26.1756 19.7834 26.1191 19.6044 26.006C19.4255 25.8836 19.2983 25.7187 19.2229 25.5115L18.8555 24.4941H14.8144L14.4329 25.5115C14.3575 25.7187 14.2256 25.8836 14.0372 26.006C13.8582 26.1191 13.6604 26.1756 13.4438 26.1756C13.1235 26.1756 12.8644 26.0673 12.6666 25.8506C12.4782 25.6245 12.384 25.3749 12.384 25.1017C12.384 24.951 12.4076 24.8238 12.4547 24.7202L15.21 17.6411C15.3325 17.3208 15.535 17.0665 15.8176 16.8781C16.1096 16.6803 16.4205 16.5813 16.7502 16.5813C17.1081 16.5531 17.4473 16.6379 17.7675 16.8357C18.0972 17.0241 18.328 17.2926 18.4599 17.6411L21.2011 24.7202C21.2482 24.8615 21.2718 24.9887 21.2718 25.1017ZM18.3045 22.7279L16.835 18.6726L15.3654 22.7279H18.3045ZM30.6313 22.3181C30.6313 22.9022 30.5418 23.4391 30.3629 23.9289C30.1933 24.4094 29.9295 24.8238 29.5716 25.1724C29.223 25.5209 28.7803 25.7894 28.2434 25.9778C27.7158 26.1662 27.0941 26.2604 26.3782 26.2604C25.6623 26.2604 25.0359 26.1662 24.4989 25.9778C23.9714 25.78 23.5287 25.5115 23.1707 25.1724C22.8222 24.8238 22.5584 24.4094 22.3794 23.9289C22.2099 23.4485 22.1251 22.9163 22.1251 22.3322V17.5846C22.1251 17.3114 22.224 17.0759 22.4218 16.8781C22.6196 16.6803 22.8646 16.5813 23.1566 16.5813C23.4298 16.5813 23.6653 16.6803 23.8631 16.8781C24.0609 17.0759 24.1598 17.3114 24.1598 17.5846V22.2616C24.1598 22.921 24.3435 23.4579 24.7109 23.8724C25.0877 24.2775 25.6434 24.48 26.3782 24.48C27.113 24.48 27.664 24.2775 28.0314 23.8724C28.3988 23.4579 28.5825 22.921 28.5825 22.2616V17.5846C28.5825 17.3114 28.6814 17.0759 28.8792 16.8781C29.077 16.6803 29.3267 16.5813 29.6281 16.5813C29.9013 16.5813 30.1368 16.6803 30.3346 16.8781C30.5324 17.0759 30.6313 17.3114 30.6313 17.5846V22.3181ZM39.5106 17.5563C39.5106 17.8012 39.4258 18.0085 39.2562 18.178C39.0867 18.3476 38.8842 18.4324 38.6487 18.4324H36.6846V25.1724C36.6846 25.4456 36.5857 25.6811 36.3879 25.8789C36.19 26.0767 35.9498 26.1756 35.6672 26.1756C35.3941 26.1756 35.1586 26.0767 34.9607 25.8789C34.7629 25.6811 34.664 25.4456 34.664 25.1724V18.4324H32.6999C32.455 18.4324 32.2478 18.3476 32.0782 18.178C31.9087 17.9991 31.8239 17.7824 31.8239 17.5281C31.8239 17.2926 31.9087 17.09 32.0782 16.9205C32.2478 16.7509 32.455 16.6661 32.6999 16.6661H38.6487C38.8842 16.6661 39.0867 16.7556 39.2562 16.9346C39.4258 17.1042 39.5106 17.3114 39.5106 17.5563ZM49.7635 21.3855C49.7635 22.092 49.6411 22.7467 49.3962 23.3496C49.1512 23.9431 48.8074 24.4565 48.3647 24.8898C47.9314 25.3231 47.4133 25.6622 46.8104 25.9071C46.2075 26.1426 45.5481 26.2604 44.8322 26.2604C44.1257 26.2604 43.471 26.1426 42.8681 25.9071C42.2652 25.6622 41.7424 25.3231 41.2997 24.8898C40.8664 24.4565 40.5272 23.9431 40.2823 23.3496C40.0374 22.7467 39.9149 22.092 39.9149 21.3855C39.9149 20.679 40.0374 20.0291 40.2823 19.4356C40.5272 18.8327 40.8664 18.3146 41.2997 17.8813C41.7424 17.448 42.2652 17.1136 42.8681 16.8781C43.471 16.6332 44.1257 16.5107 44.8322 16.5107C45.5481 16.5107 46.2075 16.6332 46.8104 16.8781C47.4133 17.1136 47.9314 17.448 48.3647 17.8813C48.8074 18.3146 49.1512 18.8327 49.3962 19.4356C49.6411 20.0291 49.7635 20.679 49.7635 21.3855ZM47.7006 21.3855C47.7006 20.9428 47.6299 20.533 47.4886 20.1562C47.3567 19.7794 47.1636 19.4544 46.9093 19.1813C46.6644 18.8987 46.3629 18.682 46.005 18.5313C45.6564 18.3711 45.2655 18.2911 44.8322 18.2911C44.3989 18.2911 44.0032 18.3711 43.6453 18.5313C43.2967 18.682 43 18.8987 42.7551 19.1813C42.5101 19.4544 42.317 19.7794 42.1757 20.1562C42.0439 20.533 41.9779 20.9428 41.9779 21.3855C41.9779 21.8283 42.0439 22.238 42.1757 22.6148C42.317 22.9916 42.5101 23.3166 42.7551 23.5898C43 23.863 43.2967 24.0797 43.6453 24.2398C44.0032 24.3999 44.3989 24.48 44.8322 24.48C45.2655 24.48 45.6564 24.3999 46.005 24.2398C46.3629 24.0797 46.6644 23.863 46.9093 23.5898C47.1636 23.3166 47.3567 22.9916 47.4886 22.6148C47.6299 22.238 47.7006 21.8283 47.7006 21.3855Z" fill="white" fill-opacity="0.9"></path><path d="M21.2718 25.1017C21.2718 25.3655 21.1729 25.6104 20.975 25.8365C20.7866 26.0626 20.5276 26.1756 20.1979 26.1756C19.9812 26.1756 19.7834 26.1191 19.6044 26.006C19.4255 25.8836 19.2983 25.7187 19.2229 25.5115L18.8555 24.4941H14.8144L14.4329 25.5115C14.3575 25.7187 14.2256 25.8836 14.0372 26.006C13.8582 26.1191 13.6604 26.1756 13.4438 26.1756C13.1235 26.1756 12.8644 26.0673 12.6666 25.8506C12.4782 25.6245 12.384 25.3749 12.384 25.1017C12.384 24.951 12.4076 24.8238 12.4547 24.7202L15.21 17.6411C15.3325 17.3208 15.535 17.0665 15.8176 16.8781C16.1096 16.6803 16.4205 16.5813 16.7502 16.5813C17.1081 16.5531 17.4473 16.6379 17.7675 16.8357C18.0972 17.0241 18.328 17.2926 18.4599 17.6411L21.2011 24.7202C21.2482 24.8615 21.2718 24.9887 21.2718 25.1017ZM18.3045 22.7279L16.835 18.6726L15.3654 22.7279H18.3045ZM30.6313 22.3181C30.6313 22.9022 30.5418 23.4391 30.3629 23.9289C30.1933 24.4094 29.9295 24.8238 29.5716 25.1724C29.223 25.5209 28.7803 25.7894 28.2434 25.9778C27.7158 26.1662 27.0941 26.2604 26.3782 26.2604C25.6623 26.2604 25.0359 26.1662 24.4989 25.9778C23.9714 25.78 23.5287 25.5115 23.1707 25.1724C22.8222 24.8238 22.5584 24.4094 22.3794 23.9289C22.2099 23.4485 22.1251 22.9163 22.1251 22.3322V17.5846C22.1251 17.3114 22.224 17.0759 22.4218 16.8781C22.6196 16.6803 22.8646 16.5813 23.1566 16.5813C23.4298 16.5813 23.6653 16.6803 23.8631 16.8781C24.0609 17.0759 24.1598 17.3114 24.1598 17.5846V22.2616C24.1598 22.921 24.3435 23.4579 24.7109 23.8724C25.0877 24.2775 25.6434 24.48 26.3782 24.48C27.113 24.48 27.664 24.2775 28.0314 23.8724C28.3988 23.4579 28.5825 22.921 28.5825 22.2616V17.5846C28.5825 17.3114 28.6814 17.0759 28.8792 16.8781C29.077 16.6803 29.3267 16.5813 29.6281 16.5813C29.9013 16.5813 30.1368 16.6803 30.3346 16.8781C30.5324 17.0759 30.6313 17.3114 30.6313 17.5846V22.3181ZM39.5106 17.5563C39.5106 17.8012 39.4258 18.0085 39.2562 18.178C39.0867 18.3476 38.8842 18.4324 38.6487 18.4324H36.6846V25.1724C36.6846 25.4456 36.5857 25.6811 36.3879 25.8789C36.19 26.0767 35.9498 26.1756 35.6672 26.1756C35.3941 26.1756 35.1586 26.0767 34.9607 25.8789C34.7629 25.6811 34.664 25.4456 34.664 25.1724V18.4324H32.6999C32.455 18.4324 32.2478 18.3476 32.0782 18.178C31.9087 17.9991 31.8239 17.7824 31.8239 17.5281C31.8239 17.2926 31.9087 17.09 32.0782 16.9205C32.2478 16.7509 32.455 16.6661 32.6999 16.6661H38.6487C38.8842 16.6661 39.0867 16.7556 39.2562 16.9346C39.4258 17.1042 39.5106 17.3114 39.5106 17.5563ZM49.7635 21.3855C49.7635 22.092 49.6411 22.7467 49.3962 23.3496C49.1512 23.9431 48.8074 24.4565 48.3647 24.8898C47.9314 25.3231 47.4133 25.6622 46.8104 25.9071C46.2075 26.1426 45.5481 26.2604 44.8322 26.2604C44.1257 26.2604 43.471 26.1426 42.8681 25.9071C42.2652 25.6622 41.7424 25.3231 41.2997 24.8898C40.8664 24.4565 40.5272 23.9431 40.2823 23.3496C40.0374 22.7467 39.9149 22.092 39.9149 21.3855C39.9149 20.679 40.0374 20.0291 40.2823 19.4356C40.5272 18.8327 40.8664 18.3146 41.2997 17.8813C41.7424 17.448 42.2652 17.1136 42.8681 16.8781C43.471 16.6332 44.1257 16.5107 44.8322 16.5107C45.5481 16.5107 46.2075 16.6332 46.8104 16.8781C47.4133 17.1136 47.9314 17.448 48.3647 17.8813C48.8074 18.3146 49.1512 18.8327 49.3962 19.4356C49.6411 20.0291 49.7635 20.679 49.7635 21.3855ZM47.7006 21.3855C47.7006 20.9428 47.6299 20.533 47.4886 20.1562C47.3567 19.7794 47.1636 19.4544 46.9093 19.1813C46.6644 18.8987 46.3629 18.682 46.005 18.5313C45.6564 18.3711 45.2655 18.2911 44.8322 18.2911C44.3989 18.2911 44.0032 18.3711 43.6453 18.5313C43.2967 18.682 43 18.8987 42.7551 19.1813C42.5101 19.4544 42.317 19.7794 42.1757 20.1562C42.0439 20.533 41.9779 20.9428 41.9779 21.3855C41.9779 21.8283 42.0439 22.238 42.1757 22.6148C42.317 22.9916 42.5101 23.3166 42.7551 23.5898C43 23.863 43.2967 24.0797 43.6453 24.2398C44.0032 24.3999 44.3989 24.48 44.8322 24.48C45.2655 24.48 45.6564 24.3999 46.005 24.2398C46.3629 24.0797 46.6644 23.863 46.9093 23.5898C47.1636 23.3166 47.3567 22.9916 47.4886 22.6148C47.6299 22.238 47.7006 21.8283 47.7006 21.3855Z" fill="white" fill-opacity="0.2"></path></g><g opacity="0.5" filter="url(#filter2_di)"><rect x="9.25917" y="36" width="44.9911" height="2.72727" rx="1.36364" fill="white" fill-opacity="0.5"></rect></g></g><defs><filter id="filter0_i" x="0.480469" y="0" width="62" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="0.654166"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter><filter id="filter1_di" x="7.80486" y="15.2024" width="46.5378" height="18.908" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="3.27083"></feOffset><feGaussianBlur stdDeviation="2.28958"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.258734 0 0 0 0 0.446094 0 0 0 0.1 0"></feColorMatrix><feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="0.654166"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend></filter><filter id="filter2_di" x="3.90691" y="33.8591" width="55.6957" height="13.4318" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="3.21136"></feOffset><feGaussianBlur stdDeviation="2.67613"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"></feColorMatrix><feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="0.654166"></feOffset><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect2_innerShadow"></feBlend></filter><linearGradient id="paint0_linear" x1="31.4805" y1="0" x2="31.4805" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear" x1="31.7547" y1="13.0908" x2="31.7547" y2="30.5454" gradientUnits="userSpaceOnUse"><stop stop-color="#0098FD" stop-opacity="0"></stop><stop offset="1" stop-color="#0098FD"></stop></linearGradient><clipPath id="clip0"><rect width="62" height="48" fill="white" transform="translate(0.480469)"></rect></clipPath></defs></svg>
                    <p className='text-lg font-semibold'>Subtitles</p>
                    <p className='text-gray-500 text-sm'>Automatically Generate Captions</p>

                </div>
            </Button>
        </div>
    )
}

export default AutoSubtitle