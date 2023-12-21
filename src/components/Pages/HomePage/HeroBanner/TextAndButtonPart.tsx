import SolidButton from "@/components/UI/SolidButton";
import CountNFTs from "./CountNFTs";

const TextAndButtonPart = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-4xl font-black uppercase ">discover and collect digital art nets</h1>
            <p className="leading-relaxed max-w-sm text-slate-600">Digital market place for crypto collectibles and non-fungible tokens (NFTs). Buy, Sell, and discover exclusive digital assets.</p>
            <SolidButton name="Explore Now"/>
            <CountNFTs />
        </div>
    );
};

export default TextAndButtonPart;