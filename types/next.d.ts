import type { 
  GetStaticPropsContext,
  GetServerSidePropsContext,
  GetStaticPathsContext,
  NextApiRequest,
  NextApiResponse
} from 'next';

declare module 'next' {
  interface PageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}
