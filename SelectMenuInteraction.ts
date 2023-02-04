// import { SelectMenuInteractions, SelectMenuType } from "./SelectMenuType";

import { SelectMenuInteractions, SelectMenuType } from "./SelectMenuType";

/**
 * The SelectMenuInteraction class allows for the handling of different types of select menu interactions.
 * It takes an options object of type SelectMenuType, which defines the type and behavior of the interaction.
 */
export class SelectMenuInteraction<T extends keyof SelectMenuInteractions> {
    /**
     * 
     * @param options An object containing the options for the select menu interaction.
     */
    constructor(options: SelectMenuType<T>) {
        Object.assign(this, options);
    }
}



