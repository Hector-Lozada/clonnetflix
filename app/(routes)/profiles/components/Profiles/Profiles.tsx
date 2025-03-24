"use client";
import { Button } from "@/components/ui/button";
import { ProfilesProps } from "./Profiles.types";

export function Profiles(props: ProfilesProps) {
    const { users } = props;

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <div className="flex gap-7">
                <p>Usuarios de Perfiles ...</p>
            </div>
            <div className="mt-16 flex items-center justify-center">
                <Button
                    variant="outline"
                    size="lg"
                    className="text-gray-500 border-gray-500"
                    onClick={() => console.log("click")}
                >
                    Administrar Perfiles
                </Button>
            </div>
        </div>
    );
}
