import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/intial-profile";
import { IntialModal } from "@/components/models/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();
    
    //fetching is member is any server or not
    if(profile){
        const server = await db.server.findFirst({
            where:{
                members: {
                    some: {
                        profileId: profile.id,
                    }
                }
            }
        });
         if(server){
            redirect(`/servers/${server.id}`);
         }
    }
    
    return <IntialModal/>;
}
 
export default SetupPage;