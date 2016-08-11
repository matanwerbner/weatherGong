export const addToSubscriptionIdsStorage = (id) => {
    let existingSubscriptionIds = [];
    if (window.localStorage.getItem("subscriptionIds")) {
        existingSubscriptionIds = JSON.parse(window.localStorage.getItem("subscriptionIds"));
    }
    existingSubscriptionIds.push(id);
    window.localStorage.setItem("subscriptionIds", JSON.stringify(existingSubscriptionIds));

}

export const removeFromSubscriptionIdsStorage = (id) => {
    let existingSubscriptionIds = [];
    if (window.localStorage.getItem("subscriptionIds")) {
        existingSubscriptionIds = JSON.parse(window.localStorage.getItem("subscriptionIds"));
    }
    existingSubscriptionIds = existingSubscriptionIds.filter((l) => l != id);

    window.localStorage.setItem("subscriptionIds", JSON.stringify(existingSubscriptionIds));

}

export const getSubscriptionIdsFromStorage = () => {
    if (window.localStorage.getItem("subscriptionIds")) {
        return JSON.parse(window.localStorage.getItem("subscriptionIds"));
    }
    return [];
}
