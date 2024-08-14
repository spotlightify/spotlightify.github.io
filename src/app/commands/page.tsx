import FeatureCard from "@/components/ui/featureCard";
import features from "../data/features";

export default function Page() {
    return (
        <div className="flex items-center flex-col gap-16">
            <h3 className="text-5xl">
                Commands
            </h3>
            <div className='inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full'>
                {
                    features.map((feature, index) => (
                        <FeatureCard key={index} title={feature.Name} description={feature.Description} keyword={feature.Keyword} icon={feature.Icon} />
                    ))
                }
            </div>
        </div>
    );
}