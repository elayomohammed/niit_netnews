import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type TrendingNewsType = {
    news: {
        title: string;
        description: string;
        body: string;
    }
};

function TrendingNews({ news }: TrendingNewsType) {
    const { title, description, body } = news;
    return (
        <ScrollView horizontal={true}>
            <View style={styles.trending_news}>
                <Text>Trending News</Text>
                <View>
                    <Text>{title}</Text>
                    <Text>{description}</Text>
                    <Text>{body}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    trending_news: {
        padding: 10,
        width: '100%',
    }
})

export default TrendingNews;