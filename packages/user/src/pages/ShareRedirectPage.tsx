import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RoutePaths from 'src/constants/routePath.ts';
import useUpdateShareLinkClickCount from 'src/hooks/query/useUpdateShareLinkClickCount.ts';

export default function ShareRedirectPage() {
  const { id } = useParams<{ id: string }>();
  const { mutate: updateClickCount } = useUpdateShareLinkClickCount();
    const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      updateClickCount({ id });
    } else {
      navigate(RoutePaths.Home, { replace: true });
    }
  }, [id, navigate]);

  return null;
}
