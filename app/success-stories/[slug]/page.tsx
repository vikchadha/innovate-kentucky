import { successStories, type SuccessStorySlug } from '@/data/success-stories';
import { CheckIcon } from '@heroicons/react/24/outline';
import { YouTubeEmbed } from '@/components/youtube-embed';
import { LogoPlaceholder } from '@/components/logo-placeholder';

export default function StoryPage({ params }: { params: { slug: SuccessStorySlug } }) {
  const story = successStories[params.slug];
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">{story.title}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <YouTubeEmbed id={story.videoId} />
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Impact Highlights</h3>
            <ul className="space-y-2">
              {story.stats.map((stat, i) => (
                <li key={i} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  {stat}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="flex flex-wrap gap-4 mb-8">
            {story.companies.map(company => (
              <LogoPlaceholder key={company} name={company} />
            ))}
          </div>
          <div className="prose max-w-none">
            <p>{story.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
