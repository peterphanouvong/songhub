import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser, getOrganization } = getKindeServerSession();

  const user = await getUser();
  const org = await getOrganization();
  return (
    <div className="container">
      <ul>
        <li>
          <LoginLink postLoginRedirectURL="/api/auth/setup">Sign in</LoginLink>
        </li>
        <li>
          <LoginLink orgCode="org_60dd4b10057c0">
            Sign in to Test Tenant
          </LoginLink>
        </li>
        <li>
          <LoginLink orgCode="org_39299c145dd64">Sign in to Test8</LoginLink>
        </li>
        <li>
          <LogoutLink>Sign out</LogoutLink>
        </li>
      </ul>

      {user && (
        <div>
          <h3>You are logged into {org?.orgCode}</h3>{" "}
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
