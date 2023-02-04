import {
    ChannelSelectMenuInteraction,
    MentionableSelectMenuInteraction, 
    RoleSelectMenuInteraction, 
    StringSelectMenuInteraction, 
    UserSelectMenuInteraction 
} from "discord.js";

/**
 * Different types of discord.js select menu interactions
 */

export type SelectMenuInteractions = {
    /**
     * Channel select menu interaction
     */
    channel: ChannelSelectMenuInteraction,
    /**
     * Mentionable select menu interaction
     */
    mention: MentionableSelectMenuInteraction,
    /**
     * Role select menu interaction
     */
    role: RoleSelectMenuInteraction,
    /**
     * String select menu interaction
     */
    string: StringSelectMenuInteraction,
    /**
     * User select menu interaction
     */
    user: UserSelectMenuInteraction,
}

/**
 * Type for the run function that takes a select menu interaction of type T
 * and returns a promise that resolves to an unknown value.
 */
type RunFunction<T extends keyof SelectMenuInteractions> = {
    (interaction: SelectMenuInteractions[T]): Promise<unknown>;
}

/**
 * Type for the select menu options object.
 * It contains a type property, which should be a key from the SelectMenuInteractions enum,
 * and a run property, which is a function that takes an interaction of the specified type and returns a promise.
 */
export type SelectMenuType<Key extends keyof SelectMenuInteractions> = {
    type: Key,
    run: RunFunction<Key>;
}
