import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex justify-center">
            <FadeLoader color={'green'} className="w-[50px] h-[50px]"></FadeLoader>
        </div>
    );
};

export default Loading;