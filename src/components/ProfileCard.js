import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import Image from '@material-tailwind/react/Image';
import H5 from '@material-tailwind/react/Heading5';
import Icon from '@material-tailwind/react/Icon';
import LeadText from '@material-tailwind/react/LeadText';
import Button from '@material-tailwind/react/Button';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import SettingsForm from "./SettingsForm.js";
import ChangePass from "./ChangePass.js";

export default function ProfileCard({ user }) {
  return (
    <Card>
      <div className="flex flex-wrap justify-center">
        <div className="w-48 px-4 -mt-24">
          <Image src={user?.avatar} rounded raised />
        </div>
        {/* <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              
            </span>
            <span className="text-sm text-gray-700">Friends</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              
            </span>
            <span className="text-sm text-gray-700">Comments</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
              10
            </span>
            <span className="text-sm text-gray-700">Photos</span>
          </div>
        </div> */}
      </div>
      <div className="text-center">
        <H5 color="gray">{user.first_name + " " + user.last_name}</H5>
        <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
          <Icon name="email" size="xl" />
          {user?.email}
        </div>
        {/* <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
          <Icon name="work" size="xl" />
          Solution Manager - Creative Tim Officer
        </div>
        <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
          <Icon name="account_balance" size="xl" />
          University of Computer Science
        </div> */}
      </div>
      {/* <CardBody>
        <div className="border-t border-lightBlue-200 text-center px-2 ">
          <LeadText color="blueGray">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </LeadText>
        </div>
      </CardBody> */}
      <CardFooter className="flex justify-center items-center">
        <div className="flex ">
          <div className="w-full flex justify-center ">
            <Button color="purple" buttonType="link" ripple="dark">
              Edit Profile
            </Button>
          </div>
          <div className="w-full flex justify-center ">
            <Button color="purple" buttonType="link" ripple="dark">
              Change Password
            </Button>
          </div>
        </div>
      </CardFooter>
      <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
        <SettingsForm user={user} />
      </div>
      <div className="xl:col-start-1 xl:col-end-5 px-4 mb-16">
        <ChangePass user={user} />
      </div>
    </Card>
  );
}
