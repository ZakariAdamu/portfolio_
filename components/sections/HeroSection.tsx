import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity";

const HERO_SECTION_QUERY = defineQuery(`*[_id == "singleton-profile"][0]{
  firstName,
  lastName,
  headline,
  headlineStaticText,
  headlineAnimatedWords,
  headlineAnimationDuration,
  shortBio,
  email,
  phone,
  location,
  availability,
  socialLinks,
  yearsOfExperience, 
  profileImage
}`);

const HeroSection = async () => {
	const { data: profile } = await sanityFetch({ query: HERO_SECTION_QUERY });

	if (!profile) {
		return null;
	}

	return <div>HeroSection</div>;
};

export default HeroSection;
