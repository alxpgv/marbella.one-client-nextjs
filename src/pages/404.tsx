import { MainLayout } from "@/components/common/main-layout";
import { Container } from "@/components/ui/container";
import { settings } from "@/data/settings";

const NotFound = () => {
  return (
    <MainLayout>
      <Container>
        <h2>Not Found</h2>
        <p />
        <p>The requested page doesn't exist or you don't have access to it.</p>
      </Container>
    </MainLayout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      settings,
    },
    revalidate: 200,
  };
};

export default NotFound;
