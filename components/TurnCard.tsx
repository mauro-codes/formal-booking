import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from "react-native";
import Colors from "../Colors";

type TurnCardProps = {
    hour: number;
    minutes: number;
    available: boolean;
    onTurnSelected: (hour: number, minutes: number) => void;
};

const ConfirmIcon = require("../assets/confirm-icon.png");

const TurnCard: React.FC<TurnCardProps> = (props) => {
    const { hour, minutes, available, onTurnSelected } = props;

    const onConfirmTurnTapped = async (hour: number, minutes: number) => {
        onTurnSelected(hour, minutes);
    };

    return (
        <View style={{...styles.container, backgroundColor: available ? "transparent" : "#ccc"}}>
            <Text style={styles.hour}>
                {hour}:{minutes} {hour > 12 ? "pm" : "am"}
            </Text>
            {available && (
                <TouchableWithoutFeedback
                    onPress={() => onConfirmTurnTapped(hour, minutes)}
                >
                    <View style={styles.body}>
                        <Text style={styles.confirmText}>Confirm</Text>
                        <Image
                            style={styles.confirmIcon}
                            source={ConfirmIcon}
                        />
                    </View>
                </TouchableWithoutFeedback>
            )}
            {!available && <Text style={styles.confirmText}>Not available</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.FORMAL_GRAY,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 8,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    hour: {
        color: Colors.FORMAL_BLUE,
        fontFamily: "Neuton_700Bold",
        fontSize: 18,
    },
    body: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    confirmText: {
        marginRight: 10,
        fontFamily: "Neuton_700Bold",
        color: Colors.FORMAL_BLUE,
    },
    confirmIcon: {
        width: 25,
        height: 25,
        resizeMode: "contain",
    },
});

export default TurnCard;
