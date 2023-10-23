import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ScrollView, Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export default function App() {
    const data = [
        { name: 'Algorand', symbol: "ALGO", color: '#f7b731', percentage: 11, value: 61.19, image: require("../assets/algorand.png") },
        { name: 'USD Coin', symbol: "USDC", color: '#7e5bef', percentage: 64, value: 349.40, image: require("../assets/usdc.png") },
        { name: 'Ethereum', symbol: "ETH", color: '#2dcb70', percentage: 17, value: 96.47, image: require("../assets/eth.png") },
        { name: 'Solana', symbol: "SOL", color: '#e56367', percentage: 8, value: 35.67, image: require("../assets/solana.png") },
    ];

    const data2 = [
        { name: 'Algorand', symbol: "ALGO", color: '#f7b731', percentage: 12, value: 127.31, image: require("../assets/algorand.png") },
        { name: 'USD Coin', symbol: "USDC", color: '#7e5bef', percentage: 64, value: 54.64, image: require("../assets/usdc.png") },
    ];

    const data3 = [
        { name: 'Tesla', symbol: "TSLA", color: '#f7b731', percentage: 25, value: 211.99, image: require("../assets/tesla.webp") },
        { name: 'Meta', symbol: "META", color: '#7e5bef', percentage: 25, value: 308.65, image: require("../assets/meta.webp") },
        { name: 'Amazon', symbol: "AMZN", color: '#2dcb70', percentage: 25, value: 125.17, image: require("../assets/amazon.jpg") },
        { name: 'Google', symbol: "GOOGL", color: '#e56367', percentage: 25, value: 135.60, image: require("../assets/google.png") },
    ];


    const pieData = data.map(item => ({
        value: item.percentage,
        svg: { fill: item.color },
        key: item.name,
    }));

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                {/* Header Section */}
                <StatusBar backgroundColor='black' style="inverted" />
                <View style={styles.header}>
                    <Text style={{ alignContent: "center", color: "white", fontSize: 24 }}>Portfolio</Text>

                </View>
                {/* Pie Chart */}
                <View style={styles.pieContainer}>
                    <PieChart
                        data={pieData}
                        innerRadius="90%"
                        outerRadius="100%"
                        animate={true}
                        animationDuration={500}
                        style={styles.pieChart}
                    />
                    <View style={styles.balanceCenter}>
                        <Text style={styles.centerText}>Total Balance</Text>
                        <Text style={styles.balanceText}>$542.73</Text>
                    </View>
                </View>

                {/* Assets List */}
                <Text style={styles.assetsTitle}>Your assets</Text>

                <Image source={require("../assets/kraken.png")} style={{ height: 100, width: "95%", margin: 10, borderRadius: 20 }} />

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.assetRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 100, marginRight: 20 }} />

                                <View>
                                    <Text style={styles.assetName}>{item.name}</Text>
                                    <Text style={[styles.symbol, { color: "#7a7a7a" }]}>{item.symbol}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.assetPercentage}>{item.percentage}%</Text>
                                <Text style={styles.assetValue}>${item.value.toFixed(2)}</Text>
                            </View>
                        </View>
                    )}
                />

                <Image source={require("../assets/coinbase.jpeg")} style={{ height: 100, width: "95%", margin: 10, borderRadius: 20 }} />

                <FlatList
                    data={data2}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.assetRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 100, marginRight: 20 }} />

                                <View>
                                    <Text style={styles.assetName}>{item.name}</Text>
                                    <Text style={[styles.symbol, { color: "#7a7a7a" }]}>{item.symbol}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.assetPercentage}>{item.percentage}%</Text>
                                <Text style={styles.assetValue}>${item.value.toFixed(2)}</Text>
                            </View>
                        </View>
                    )}
                />

                <Image source={require("../assets/robinhood.jpg")} style={{ height: 100, width: "95%", margin: 10, borderRadius: 20 }} />


                <FlatList
                    data={data3}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.assetRow}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.image} style={{ height: 50, width: 50, borderRadius: 100, marginRight: 20 }} />

                                <View>
                                    <Text style={styles.assetName}>{item.name}</Text>
                                    <Text style={[styles.symbol, { color: "#7a7a7a" }]}>{item.symbol}</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text style={styles.assetPercentage}>{item.percentage}%</Text>
                                <Text style={styles.assetValue}>${item.value.toFixed(2)}</Text>
                            </View>
                        </View>
                    )}
                />


            </SafeAreaView>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#040305',
    },
    pieContainer: {
        position: 'relative',
        alignItems: 'center',
        marginBottom: 30,
        width: 250,  // Same as the pieChart width
        height: 250, // Same as the pieChart height
    },
    balanceCenter: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centerText: {
        fontSize: 16,
        color: '#c2c2c2',
        textAlign: 'center',
        margin: 10,
    },

    header: {
        paddingTop: 50,
        paddingHorizontal: 25,
        backgroundColor: '#040305',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 30,
    },
    headerText: {
        fontSize: 20,
        color: '#818C94',
        marginBottom: 10,
    },
    balanceText: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 30,
        color: "white"
    },
    pieContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    pieChart: {
        width: 250,
        height: 250,
    },
    assetsTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        marginBottom: 10,
        color: "white",
    },
    assetRow: {
        marginHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#120d16',
    },
    assetIcon: {
        width: 22,
        height: 22,
        borderRadius: 11,
        marginRight: 15,
    },
    assetName: {
        fontSize: 18,
        fontWeight: '500',
        color: '#eeeeee',
    },
    symbol: {
        fontSize: 18,
        fontWeight: '500',
    },
    assetPercentage: {
        fontSize: 18,
        color: '#ffffff',
    },
    assetValue: {
        fontSize: 18,
        fontWeight: '500',
        color: '#7b72f1',
    },
});
